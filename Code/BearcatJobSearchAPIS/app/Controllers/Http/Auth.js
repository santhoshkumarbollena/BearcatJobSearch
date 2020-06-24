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

    let token = await auth.generate(user);
    user = await user.toJSON();

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

    token = _.merge(token, {
      message: "user login successfully",
      studentId: user.studentId,
      userId: user.userId,
      email: user.email,
    });
    return response.status(200).json(token);
  }

  
}
module.exports = Auth;