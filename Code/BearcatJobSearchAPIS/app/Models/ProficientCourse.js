'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProficientCourse extends Model {
    static get primaryKey() {
        return "ProficientCourseId";
    }
    student() {
        return this.belongsTo("App/Models/Student", "StudentId", "StudentId");
    } 
}

module.exports = ProficientCourse
