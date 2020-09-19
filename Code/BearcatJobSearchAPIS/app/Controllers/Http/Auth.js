"use strict";

const _ = use("lodash");
const nodeCache = use("node-cache");
const Hash = use("Hash");
const Env = use("Env");
const Mail = use("Mail");
const Student = use("App/Models/Student");
const myCache = new nodeCache({ stdTTL: 600 });

class Auth {

  //Student Registration logic
  async registrationForStudent({ request, response, auth }) {
    //Getting all the details from the registration form.
    const student = request.all();
    console.log("In Registration");
    console.log(student);
    let err = [];
    //Validation for all the feilds in the registration form.
    if (!student.studentId) err.push("studentId is required");
    if (!student.email) err.push("email is required");
    if (!student.password) err.push("password is required");
    if (!student.dob) err.push("dob is required");
    if (!student.phoneNumber) err.push("phoneNumber is required");
    if (!student.gender) err.push("gender is required");

    //Checking for any missing fields to send error messages as response.
    if (err && err.length) {
      return response.status(400).json({
        error: {
          status: 400,
          message: "missing required parameters",
          feilds: err,
        },
      });
    }
    //Hashing the password for security purpose.
    try {
      const hashPassword = await Hash.make(student.password);
      student.password = hashPassword;

      //Storing the student details in database.
      let studentInDB = await Student.create(student);

      //Attaching succesful message for the response object.
      studentInDB = _.merge(studentInDB, {
        message: "student registered successfully",
      });

      //Returning the response object.
      return response.status(200).json(studentInDB);
    } catch (err) {
      //Returning the error if the student is not stored.
      return response.status(400).json({
        error: err,
      });
    }
  }


  //Student Login logic 
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
      name: user.studentName,
      studentId: user.studentId,
      userId: user.userId,
      email: user.email,
    });

    //Sending the succesful student details along with the access token.
    return response.status(200).json(token);
  }

  //Forgot password for a student function.
  async forgotPassword({ request, auth, response }) {

    //Getting the student email to send the password manage link.
    const studentEmail = request.all();
    console.log(studentEmail.email, " will get a mail to reset password");

    //Successful response that student got.
    return response
      .status(200)
      .json("Mail sent to Student succesfully " + studentEmail.email);
  }

  //Sending mail for reset password for a student.
  async sendResetMail({ request, response }) {
    let reqBody = request.post();
    if (!reqBody || !reqBody.email) {
      return response.status(400).json({
        status: 400,
        message: "missing required feilds, email is required",
      });
    }

    let student = await Student.findBy("email", reqBody.email);
    if (!student) {
      return response.status(400).json({
        status: 400,
        message: "email id not found, please check email id",
      });
    }

    student = await student.toJSON();

    const secureResetkey =
      Math.random().toString(36).slice(2) +
      (Math.random() * 100 + "").toString().slice(3);

    myCache.set(secureResetkey, { email: student.email });
    student.url = `http://localhost:8080/#/reset-password/${secureResetkey}`;

    let mailResponse = await Mail.send(
      "emails.resetEmail",
      student,
      (message) => {
        message
          .to(student.email)
          .from(Env.get("MAIL_USERNAME"))
          .subject("Reset Password Link");
      }
    );

    return response.status(200).json({
      status: 200,
      message: "Mail sent successfully",
      mailResponse,
    });
  }

  // validate reset password link for the student
  async validateResetPasswordLink({ request, response }) {
    const secretKey = request.params.secretKey;
    const getSecretKey = myCache.get(secretKey);

    if (getSecretKey) {
      return response.status(200).json({
        status: 200,
        message: "success, verified link",
      });
    } else {
      return response.status(400).json({
        status: 400,
        message: "reset token has expired, please generate new link",
      });
    }
  }

  // reset password for the student
  async resetPassword({ request, response }) {
    const getSecretKey = myCache.get(request.params.secretKey);
    const userData = request.post();

    if (!userData.password || !userData.confirmPassword) {
      return response.status(400).json({
        status: 400,
        message:
          "missing required feilds, password and confirmPassword is required",
      });
    }

    if (getSecretKey && getSecretKey.email) {
      if (userData.password != userData.confirmPassword) {
        return response.status(400).json({
          status: 400,
          message: "confirm password is not same as password",
        });
      }
      let student = await Student.findBy("email", getSecretKey.email);

      // generating new  hash password
      const hashPassword = await Hash.make(userData.password);
      student.password = hashPassword;

      // updating password in database
      await student.save();
      return response.status(200).json({
        status: 200,
        message: "password updated successfully",
      });
    } else {
      return response.status(400).json({
        status: 400,
        message: "reset token has expired, please generate new link",
      });
    }
  }

  //Change password for the student
  async changePassword({ request, auth, response }) {
    //console.log(auth);

    //based on auth.Student id retrieve student details
    const id = auth.studentId;
    let student = await Student.find(id);

    //compare old password and hashed password from db
    const userData = request.all();
    console.log(userData);
    const hashedPassword = await Hash.verify(
      userData.password,
      student.password
    );
    //console.log(hashedPassword);

    //if same create hash for new password and store it in db
    let result = "";
    if (hashedPassword) {
      try {
        const newHashPassword = await Hash.make(userData.newpassword);
        student.password = newHashPassword;
        result = await student.save();
      } catch (err) {
        //Returning the error
        return response.status(400).json({
          error: err,
        });
      }
    }

    //Send successfull message
    return response.status(200).json({
      message: "password changed succesfully",
      result,
    });
  }

}
module.exports = Auth;
