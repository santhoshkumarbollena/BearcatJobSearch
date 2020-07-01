"use strict";
const Env = use("Env");
const Mail = use("Mail");
const Student = use("App/Models/Student");

class Util {
  async sendTestMail({ request, response }) {
    let reqBody = request.post();
    console.log("-------reqBody", reqBody);
    if (!reqBody || !reqBody.email) {
      return response.status(400).json({
        status: 400,
        message: "missing required feilds, email is required",
      });
    }

    let student = await Student.findBy("email", reqBody.email);
    student = await student.toJSON();
    student.url = "http://localhost:8080/#/reset-password";

    let mailResponse = await Mail.send(
      "emails.resetEmail",
      student,
      (message) => {
        message
          .to(student.email)
          .from(Env.get("MAIL_USERNAME"))
          .subject("Testing Mail");
      }
    );

    return response.status(200).json({
      status: 200,
      message: "Mail sent successfully",
      mailResponse,
    });
  }
}

module.exports = Util;
