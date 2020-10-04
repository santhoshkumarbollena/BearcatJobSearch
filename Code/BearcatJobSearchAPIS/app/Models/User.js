"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class User extends Model {
  static get primaryKey() {
    return "userId";
  }

  createdJobs() {
    return this.hasMany("App/Models/Job", "userId", "createdBy");
  }
}

module.exports = User;
