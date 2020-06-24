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
        //   StudentId: '1',
        //   StudentName: 'santhosh',
        //   Email: 'demo',
        //   Password: 'demo',
        //   Resume: 'my resume',
        //   DOB: '18/07/1998',
        //   PhoneNumber: '9529054491',
        //   Gender: 'Male'
        // }
        console.log(request.all());
        const student = request.all();
        const studentInDB = await Student.create(student);
        return response.status(200).json({
            message: "student registered" + studentInDB,
        });
    }
}
module.exports = Auth;
