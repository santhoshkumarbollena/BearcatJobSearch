"use strict";

const _ = use("lodash");
const Hash = use("Hash");
const Student = use("App/Models/Student");
const Job = use("App/Models/Job");
const StudentApplication = use("App/Models/StudentApplication");

class JobController {
  async getAllJobs({ request, auth, response, params }) {
    try {
      const job = await Job.query().with("admin_user").fetch();
      return response.status(200).json(job);
    } catch (err) {
      console.log(err);
    }
  }

  async getJobBasedOnId({ request, auth, response, params }) {
    const job = await Job.query()
      .where("id", params.jobId)
      .with("admin_user")
      .fetch();
    return response.status(200).json(job);
  }

  async createJob({ request, auth, response }) {
    let jobInput = request.all();
    jobInput.createdBy = auth.user.studentId;
    const job = await Job.findOrCreate(jobInput);
    return response.status(200).json(job);
  }

  async updateJob({ request, auth, response, params }) {
    let jobInput = request.all();
    console.log(jobInput);
    let job = await Job.find(params.id);
    job = _.merge(job, jobInput);
    await job.save();
    return response.status(200).json(job);
  }

  async deleteJob({ request, auth, response, params }) {
    const job = await Job.find(params.id);
    await job.delete();
    return response.status(200).json(job);
  }

  async appliedStudentsOfJob({ request, auth, response, params }) {
    console.log(params.jobId);
    let studetsAppliedJobds = await StudentApplication.query()
      .where("status", "Applied")
      .fetch();

    return response.status(200).json(studetsAppliedJobds);
  }

  async searchJob({ params, request, response }) {
    const queryParam = request.all();
    let jobs;

    if (queryParam && queryParam.search) {
      jobs = await Job.query()
        .where(function () {
          this.where("id", "like", "%" + queryParam.search + "%")
            .orWhere("jobTitle", "like", "%" + queryParam.search + "%")
            .orWhere("jobDescription", "like", "%" + queryParam.search + "%");
        })
        .fetch();
    } else {
      jobs = await Job.all();
    }

    return response.ok(jobs);
  }
}
module.exports = JobController;
