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

    async registrationForStudent({ request, response, auth }) {
        const student = request.all();
        let err = [];
        if (!student.studentId) err.push("studentId is required");
        if (!student.email) err.push("email is required");
        if (!student.password) err.push("password is required");
        if (!student.dob) err.push("dob is required");
        if (!student.phoneNumber) err.push("phoneNumber is required");
        if (!student.gender) err.push("gender is required");

        if (err && err.length) {
            return response.status(400).json({
                error: {
                    status: 400,
                    message: "missing required parameters",
                    feilds: err,
                },
            });
        }

        try {
            const hashPassword = await Hash.make(student.password);
            student.password = hashPassword;
            let studentInDB = await Student.create(student);
            studentInDB = _.merge(studentInDB, {
                message: "student registered successfully",
            });
            return response.status(200).json(studentInDB);
        } catch (err) {
            return response.status(400).json({
                error: err,
            });
        }
    }


}
module.exports = StudentController;