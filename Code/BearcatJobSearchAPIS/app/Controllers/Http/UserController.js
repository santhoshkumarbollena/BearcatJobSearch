"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const User = use("App/Models/User")

class UserController {

    async getAllUsers({ request, auth, response, params }) {
        const user = await User.all();
        console.log(user)
        return response.status(200).json(user);

    }
    
   

}
module.exports = UserController;