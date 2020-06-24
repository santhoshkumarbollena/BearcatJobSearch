"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JobsSchema extends Schema {
  up() {
    this.create("jobs", (table) => {
      table.increments().primary();
      table.string("jobTitle", 30).notNullable();
      table.string("jobDescription", 400).notNullable();
      table.integer("salary", 40).notNullable();
      table.string("employmentType", 40).notNullable();
      table.integer("createdBy").references("users.userId").onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("jobs");
  }
}

module.exports = JobsSchema;
