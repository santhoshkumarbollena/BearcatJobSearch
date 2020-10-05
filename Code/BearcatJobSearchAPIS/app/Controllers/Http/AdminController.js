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
       
    }

}
module.exports = AdminController;
