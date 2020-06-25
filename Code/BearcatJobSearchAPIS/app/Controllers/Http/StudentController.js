"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job")

class StudentController {
    async getStudentBasedOnId({ request, auth, response,params }) {
        // console.log(params.studentId)
        const student = await Student.find(params.studentId)
        // console.log(student)
        return response.status(200).json(student);
    }



    async getAllJobs({request, auth, response, params}) {
        const job = await Job.all();
        console.log(job)
        return response.status(200).json(job);

    }
}
module.exports = StudentController;