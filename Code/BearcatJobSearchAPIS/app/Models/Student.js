'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static get primaryKey() {
        return "StudentId";
    }
    intrested_positions() {
        return this.hasMany("App/Models/IntrestedPosition", "StudentId", "StudentId");
    }
    proficient_courses() {
        return this.hasMany("App/Models/ProficientCourse", "StudentId", "StudentId");
    }
    student_applications() {
        return this.belongsToMany(
            "App/Models/Job",
            "StudentId",
            "JobId"
        ) .pivotTable('student_applications')
    }  
}

module.exports = Student
