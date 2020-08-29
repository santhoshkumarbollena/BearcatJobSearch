"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job")

class JobController {

    async getAllJobs({ request, auth, response, params }) {
        const job = await Job.all();
        console.log(job)
        return response.status(200).json(job);

    }
    async getJobBasedOnId({ request, auth, response, params }) {
        //console.log(params.jobId)
        const job = await Job.find(params.jobId);
        //console.log(job)
        return response.status(200).json(job);
    }

   
   

}
module.exports = JobController;