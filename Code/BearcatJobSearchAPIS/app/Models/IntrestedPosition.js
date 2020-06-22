'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class IntrestedPosition extends Model {
    static get primaryKey() {
        return "PositionId";
    }
    student() {
        return this.belongsTo("App/Models/Student", "StudentId", "StudentId");
    } 
}

module.exports = IntrestedPosition
