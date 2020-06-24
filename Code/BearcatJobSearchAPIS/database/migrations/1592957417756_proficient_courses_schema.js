"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProficientCoursesSchema extends Schema {
  up() {
    this.create("proficient_courses", (table) => {
      table.increments().primary();
      table
        .integer("studentId")
        .references("students.studentId")
        .onDelete("cascade");
      table.string("course", 20).notNullable();
      table.integer("rating").unsigned();
      table.timestamps();
    });
  }

  down() {
    this.drop("proficient_courses");
  }
}

module.exports = ProficientCoursesSchema;
