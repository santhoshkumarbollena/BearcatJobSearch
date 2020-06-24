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
      table.timestamps();
    });
  }

  down() {
    this.drop("student_applications");
  }
}

module.exports = StudentApplicationsSchema;
