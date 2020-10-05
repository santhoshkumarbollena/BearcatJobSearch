

"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const User = use("App/Models/User")

class AdminController {

    async createAdmin({ request, auth, response, params }) {
        let userInput = request.all();
        console.log("In admin creation userInput",userInput)
        let student={};
        userInput.userId = Math.floor(Math.random() * 1000000000);
        console.log(userInput)
        student.studentId= userInput.userId;
        
        student.sudentName = userInput.userName;
        student.email = userInput.email;
        student.password = userInput.password;
        student.dob =  userInput.dob;
        student.gender = userInput.gender;
        student.phoneNumber = userInput.phoneNumber
        student.role = "admin";

        console.log("student",student)
        userInput = _.omit(userInput, ["gender","dob","password"]);
        console.log("userInput",userInput)

        const user = await User.findOrCreate(userInput);
        return response.status(200).json(user);
    }

   

}
module.exports = AdminController;