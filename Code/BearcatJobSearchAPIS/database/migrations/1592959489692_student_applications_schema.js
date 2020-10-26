"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class StudentApplicationsSchema extends Schema {
  up() {
    this.create("student_applications", (table) => {
      table.integer("studentId");
      table
        .foreign("studentId")
        .references("students.studentId")
        .onDelete("cascade");
      table.integer("jobId").unsigned();
      table.foreign("jobId").references("jobs.id").onDelete("cascade");
      table.string("status", 20).notNullable();
      table.string("studentName", 40).notNullable();
      table.string("email", 40).notNullable();
      table.timestamp("dob").notNullable();
      table.string("phoneNumber", 20).notNullable();
      table.string("gender", 10).notNullable();
      table.string("ugUniversity", 40);
      table.string("ugDegree", 40);
      table.string("ugDepartment", 40);
      table.string("ugScore", 10);
      table.string("graduateUniversity", 40);
      table.string("graduateDegree", 40);
      table.string("graduateDepartment", 40);
      table.string("graduateScore", 40);
      table.integer("experienceYears");
      table.integer("expectedSalary");
      table.string("employementType", 10);
      table.string("gitHubUrl", 100);
      table.string("linkedInUrl", 100);
      table.string("role", 20);
      table.timestamps();
    });
  }

  down() {
    this.drop("student_applications");
  }
}

module.exports = StudentApplicationsSchema;
