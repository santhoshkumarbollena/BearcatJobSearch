'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StudentApplication extends Model {

    job() {
        return this.hasOne("App/Models/Job", "jobId", "id");
    }
}

module.exports = StudentApplication
