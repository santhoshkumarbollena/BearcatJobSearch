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
    async getUserBasedOnId({ request, auth, response, params }) {
        //console.log(params.UserId)
        const user = await User.find(params.userId);
        //console.log(User)
        return response.status(200).json(user);
    }

    async createUser({ request, auth, response, params }) {
        let userInput = request.all();
        console.log(userInput)
        const user = await User.findOrCreate(userInput);
        return response.status(200).json(user);
    }


}
module.exports = UserController;