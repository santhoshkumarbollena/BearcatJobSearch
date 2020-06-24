"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IntrestedPositionSchema extends Schema {
  up() {
    this.create("intrested_positions", (table) => {
      table.increments().primary();
      table
        .integer("studentId")
        .references("students.studentId")
        .onDelete("cascade");
      table.string("positionName", 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("intrested_positions");
  }
}

module.exports = IntrestedPositionSchema;
