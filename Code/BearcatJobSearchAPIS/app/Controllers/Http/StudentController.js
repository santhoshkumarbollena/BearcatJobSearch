"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");

class StudentController {
    async getStudentBasedOnId({ request, auth, response,params }) {
        // console.log(params.studentId)
        const student = await Student.find(params.studentId)
        // console.log(student)
        return response.status(200).json(student);
    }


}
module.exports = StudentController;