"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProficientCourse extends Model {
  static get primaryKey() {
    return "id";
  }

  student() {
    return this.hasOne("App/Models/Student");
  }
}

module.exports = ProficientCourse;
