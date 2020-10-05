"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job");

class StudentController {
  async getStudentBasedOnId({ request, auth, response, params }) {
    // console.log(params.studentId)
    const student = await Student.find(params.studentId);
    // console.log(student)
    return response.status(200).json(student);
  }

  async getAllJobs({ request, auth, response, params }) {
    const job = await Job.all();
    console.log(job);
    return response.status(200).json(job);
  }

  async getAllStudents({ request, auth, response, params }) {
    const student = await Student.all();
    console.log(student);
    return response.status(200).json(student);
  }

  async getJobBasedOnId({ request, auth, response, params }) {
    const job = await Job.query()
      .where("id", params.jobId)
      .with("admin_user")
      .fetch();
    console.log("0---job:", job.toJSON());
    return response.status(200).json(job);
  }

  async updateStudent({ request, auth, response, params }) {
    let studentInput = request.all();
    console.log(studentInput);
    studentInput = _.omit(studentInput, ["dob","created_at","updated_at","password"]);
    let student = await Student.find(params.id);
    student = _.merge(student, studentInput);
    await student.save();
    return response.status(200).json(student);
  }

  async searchStudent({ params, request, response }) {
    const queryParam = request.all();
    let students;

    if (queryParam && queryParam.search) {
      students = await Student.query()
        .where(function () {
          this.where("StudentName", "like", "%" + queryParam.search + "%")
            .orWhere("StudentId", "like", "%" + queryParam.search + "%")
            .orWhere("phoneNumber", "like", "%" + queryParam.search + "%")
            .orWhere("email", "like", "%" + queryParam.search + "%");
        })
        .fetch();
    } else {
      students = await Student.all();
    }

    console.log(students);
    return response.ok(students);
  }
}
module.exports = StudentController;
