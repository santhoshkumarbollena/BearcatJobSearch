"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsersSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.integer("userId").primary();
      table.string("userName", 40).notNullable();
      table.string("role", 40).notNullable();
      table.string("userOrganization", 40).notNullable();
      table.string("userOrganizationDescription", 500).notNullable();
      table.string("phoneNumber", 20).notNullable();
      table.string("email", 100).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UsersSchema;
