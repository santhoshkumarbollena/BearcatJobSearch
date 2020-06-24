"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class User extends Model {
  static get primaryKey() {
    return "userId";
  }

  createdJobs() {
    return this.belongsToMany("App/Models/Job");
  }
}

module.exports = User;
