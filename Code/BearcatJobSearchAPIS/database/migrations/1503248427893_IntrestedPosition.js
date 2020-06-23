'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IntrestedPositionSchema extends Schema {
  up () {
    this.create('IntrestedPosition', (table) => {
      table.increments()
      table.integer('PositionId').notNullable().unique()
      table.integer('StudentId').references('Student.StudentId').onDelete('cascade')
      table.string('PositionName',40).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('IntrestedPosition')
  }
}

module.exports = IntrestedPositionSchema
