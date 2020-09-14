"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job");

class JobController {
  async getAllJobs({ request, auth, response, params }) {
    const job = await Job.all();
    return response.status(200).json(job);
  }

  async getJobBasedOnId({ request, auth, response, params }) {
    const job = await Job.find(params.jobId);
    return response.status(200).json(job);
  }

  async createJob({ request, auth, response, params }) {
    let jobInput = request.all();
    const job = await Job.findOrCreate(jobInput);
    return response.status(200).json(job);
  }

  async updateJob({ request, auth, response, params }) {
    let jobInput = request.all();
    const job = await Job.find(params.id);
    job = _.merge(job, jobInput);
    await job.save();
    return response.status(200).json(job);
  }

  async deleteJob({ request, auth, response, params }) {
    const job = await Job.find(params.id);
    await job.delete();
    return response.status(200).json(job);
  }
}
module.exports = JobController;
