"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Student extends Model {
  static get primaryKey() {
    return "studentId";
  }

  intrestedPositions() {
    return this.hasMany("App/Models/IntrestedPosition");
  }

  proficientCourses() {
    return this.hasMany("App/Models/ProficientCourse");
  }

  studentApplications() {
    return this.belongsToMany(
      "App/Models/Job",
      "studentId",
      "jobId",
      "studentId",
      "id"
    )
      .pivotTable("student_applications")
      .withPivot("status");
  }
}

module.exports = Student;
