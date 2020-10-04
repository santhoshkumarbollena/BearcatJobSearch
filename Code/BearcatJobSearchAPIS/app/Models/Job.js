"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Job extends Model {
  static get primaryKey() {
    return "id";
  }

  admin_user() {
    return this.hasOne("App/Models/User", "createdBy", "userId");
  }

  jobApplications() {
    return this.belongsToMany(
      "App/Models/Student",
      "jobId",
      "studentId",
      "id",
      "studentId"
    )
      .pivotTable("student_applications")
      .withPivot("status");
  }
}

module.exports = Job;
