"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job")

class StudentApplicationController {

    async StudentApplyJob({ request, auth, response, params }) {
        console.log(params.studentId,params.jobId);
        const job = await Job.find(params.jobId);
        const student = await Student.find(params.studentId);

        student.studentApplications().attach([job.id], (studentApplication) => {
            studentApplication.status = "Applied";
          });

          return "Student Applied";
  
    }

    async StudentGotRejected({ request, auth, response, params })
    {
        console.log(params.studentId,params.jobId);
        const job = await Job.find(params.jobId);
        const student = await Student.find(params.studentId);
        student.studentApplications().detach(student.id,job.id);
        student.studentApplications().attach([job.id], (studentApplication) => {
            studentApplication.status = "Rejected";
          });

          return "Student Applied";
    }
   

}
module.exports = StudentApplicationController;
