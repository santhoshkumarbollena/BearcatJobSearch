'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    static get primaryKey() {
        return "UserId";
    }
    jobs() {
        return this.hasMany("App/Models/Job", "JobId", "JobId");
    }
     
}

module.exports = User
