"use strict";

const _ = use("lodash");
const Student = use("App/Models/Student");

class Auth {
    async home({ request, response, auth }) {
        return response.status(200).json({
            message: "login route"
        })
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
        console.log(request.all())
        const student=request.all()
        const studentInDB = await Student.create(student);
        return response.status(200).json({
            message: "student registered"+studentInDB
        })
    }



}
module.exports = Auth;
