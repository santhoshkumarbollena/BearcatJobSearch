"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProficientCoursesSchema extends Schema {
  up() {
    this.create("ProficientCourses", (table) => {
      table.increments();
      table.integer("ProficientCourseId").notNullable().unique();
      table
        .integer("StudentId")
        .references("Student.StudentId")
        .onDelete("cascade");
      table.string("Course", 20).notNullable();
      table.integer("Rating").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("ProficientCourses");
  }
}

module.exports = ProficientCoursesSchema;
