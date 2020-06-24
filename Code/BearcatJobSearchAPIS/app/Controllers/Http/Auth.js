"use strict";

const _ = use("lodash");
const Student = use("App/Models/Student");

class Auth {
    async login({ request, auth, response }) {
        const userData = request.post();

        if (!userData || !userData.email || !userData.password) {
            return response.status(400).json({
                error: {
                    status: 400,
                    message: "missing required feilds, email, password are required",
                },
            });
        }
        let validateUser = await auth.attempt(userData.email, userData.password);
        return response.status(200).json({
            message: "login route",
        });
    }

    async validateToken({ request, auth, response }) {
        await auth.attempt(uid, password);
        return response.status(200).json({
            message: "login route",
        });
    }

    async registrationForStudent({ request, response, auth }) {
        // {
        //     "studentId":"1",
        //       "studentName":"santhosh",
        //       "email":"demo",
        //       "password":"demo",
        //       "resume":"my resume",
        //       "dob":"1998-07-18 00:00:00",
        //       "phoneNumber":"9529054491",
        //       "gender":"Male"
            
        // }
        //completed the registration
        console.log(request.all());
        const student = request.all();
        const studentInDB = await Student.create(student);
        return response.status(200).json({
            message: "student registered" + studentInDB,
        });
    }
}
module.exports = Auth;
