"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FaqsSchema extends Schema {
  up() {
    this.create("faqs", (table) => {
      table.increments().primary();
      table.string("FAQQuestion", 400).notNullable();
      table.string("FAQAnswer", 600).notNullable();
      table.string("category", 40).notNullable();
      table.string("role", 40).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("faqs");
  }
}

module.exports = FaqsSchema;