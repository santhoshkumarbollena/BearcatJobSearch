"use strict";
const nodeCache = use("node-cache");
const Env = use("Env");
const Mail = use("Mail");
const Student = use("App/Models/Student");
const myCache = new nodeCache({ stdTTL: 600 });

class Util {
  async sendResetMail({ request, response }) {
    let reqBody = request.post();
    if (!reqBody || !reqBody.email) {
      return response.status(400).json({
        status: 400,
        message: "missing required feilds, email is required",
      });
    }

    let student = await Student.findBy("email", reqBody.email);
    student = await student.toJSON();

    const secureResetkey =
      Math.random().toString(36).slice(2) +
      (Math.random() * 100 + "").toString().slice(3);

    myCache.set(secureResetkey, true);
    student.url = `http://localhost:8080/#/reset-password/${secureResetkey}`;

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
