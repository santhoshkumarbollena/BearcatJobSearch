"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");

class Auth {
    
    async login({ request, auth, response }) {
        const userData = request.post();

        if (!userData || !userData.email || !userData.password) {
            return response.status(400).json({
                error: {
                    status: 400,
                    message: "missing required feilds, email and password are required",
                },
            });
        }

        let user = await Student.findBy("email", userData.email);

        if (!user) {
            return response.status(401).json({
                error: {
                    status: 401,
                    message: "bad request, invalid email, password",
                },
            });
        }

        // checking hashed password
        const hashedPassword = await Hash.verify(userData.password, user.password);
        if (!hashedPassword) {
            return response.status(403).json({
                error: {
                    status: 403,
                    message: "invalid password..",
                },
            });
        }

        let token = await auth.generate(user);
        user = await user.toJSON();

        token = _.merge(token, {
            message: "user login successfully",
            studentId: user.studentId,
            userId: user.userId,
            email: user.email,
        });
        return response.status(200).json(token);
    }

    async registrationForStudent({ request, response, auth }) {
        //Getting all the details from the registration form.
        const student = request.all();
        let err = [];
        //Validation for all the feilds in the registration form.
        if (!student.studentId) err.push("studentId is required");
        if (!student.email) err.push("email is required");
        if (!student.password) err.push("password is required");
        if (!student.dob) err.push("dob is required");
        if (!student.phoneNumber) err.push("phoneNumber is required");
        if (!student.gender) err.push("gender is required");

        //Cheaking for any missing feilds to send error as response.
        if (err && err.length) {
            return response.status(400).json({
                error: {
                    status: 400,
                    message: "missing required parameters",
                    feilds: err,
                },
            });
        }
        //Hashing the password for security.
        try {
            const hashPassword = await Hash.make(student.password);
            student.password = hashPassword;
            //Storing the student details in database.
            let studentInDB = await Student.create(student);
            //Attaching succesful message for the response object. 
            studentInDB = _.merge(studentInDB, {
                message: "student registered successfully",
            });
            //Returing the response object.
            return response.status(200).json(studentInDB);
        } catch (err) {
            //Returning the error if the student is not stored.
            return response.status(400).json({
                error: err,
            });
        }
    }


}
module.exports = Auth;