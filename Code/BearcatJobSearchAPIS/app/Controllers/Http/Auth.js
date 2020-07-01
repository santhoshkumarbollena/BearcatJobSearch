"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");

class Auth {
    //Forgot password for a student function.
    async forgotPassword({ request, auth, response }) 
    {
        //Getting the student email to send the password manage link.
        const studentEmail = request.all();
        console.log(studentEmail.email," will get a mail to reset password")
        //Successful response that student got.
        return response.status(200).json("Mail sent to Student succesfully "+studentEmail.email);

    }

    //reset password for a student.
    async resetPassword({ request, auth, response }) 
    {
        //Getting the student email to reset the password.
        const student = request.all();
        console.log(student.email," password will be resetted")
        console.log(student.password," new password")
        // Hash the password and reset it.
        //Successful response that student got.
        return response.status(200).json("password resetted succesfully "+student.email);

    }

    //change password for the student
    async changePassword({request, auth, response}){
        //console.log(auth);

        //based on auth.Student id retrieve student details
        const id = 919584721;
        let student = await Student.find(id);

        //compare old password and hashed password from db
        const userData = request.all();
        console.log(userData);
        const hashedPassword = await Hash.verify(userData.password, student.password);
        //console.log(hashedPassword);

        //if same create hasdh for new passwor and store it in db
        if(hashedPassword) {
            
        }

        //send successfull message
        

        
        
        




    }

    
    //Login logic
    async login({ request, auth, response }) {
        //Getting the user data to login.
        const userData = request.post();

        //Verifying whether the data has email and password for login.
        if (!userData || !userData.email || !userData.password) {
            return response.status(400).json({
                error: {
                    status: 400,
                    message: "missing required fields, email and password are required",
                },
            });
        }

        //Getting the student based on email id.
        let user = await Student.findBy("email", userData.email);

        if (!user) {
            return response.status(401).json({
                error: {
                    status: 401,
                    message: "bad request, invalid email, password",
                },
            });
        }

        // checking hashed password for login
        const hashedPassword = await Hash.verify(userData.password, user.password);
        //If the password is incorrect sending an error with invalid password.
        if (!hashedPassword) {
            return response.status(403).json({
                error: {
                    status: 403,
                    message: "invalid password..",
                },
            });
        }

        //Generating a JWT token for managing the application.
        let token = await auth.generate(user);
        user = await user.toJSON();

        //Adding token to response object.
        token = _.merge(token, {
            message: "user login successfully",
            studentId: user.studentId,
            userId: user.userId,
            email: user.email,
        });
        //Sending the succesful student details along with the access token.
        return response.status(200).json(token);
    }

    async registrationForStudent({ request, response, auth }) {
        //Getting all the details from the registration form.
        const student = request.all();
        console.log("In Registration")
        console.log(student)
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