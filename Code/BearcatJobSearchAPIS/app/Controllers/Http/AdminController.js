"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const User = use("App/Models/User")

class AdminController {
   async createAdmin({ request, auth, response, params }) {
        let userInput = request.all();
     let student={};
     userInput.userId = Math.floor(Math.random() * 1000000000);
     student.studentId= userInput.userId;
        
        student.sudentName = userInput.userName;
        student.email = userInput.email;
        student.password = userInput.password;
        student.dob =  userInput.dob;
        student.gender = userInput.gender;
        student.phoneNumber = userInput.phoneNumber
        student.role = "admin";
      userInput = _.omit(userInput, ["gender","dob","password"]);
       const user = await User.findOrCreate(userInput);
    }

}
module.exports = AdminController;
