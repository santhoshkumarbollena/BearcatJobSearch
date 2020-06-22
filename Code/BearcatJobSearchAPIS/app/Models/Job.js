'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {
    static get primaryKey() {
        return "JobId";
    }
    student_applications() {
        return this.belongsToMany(
            "App/Models/Student",
            "StudentId",
            "JobId",
            "Status"
        ) .pivotTable('student_applications')
    } 
    student_applications() {
        return this.belongsToMany(
            "App/Models/User",
            "UserId"
        ) .pivotTable('User')
    }
     
}

module.exports = Job
