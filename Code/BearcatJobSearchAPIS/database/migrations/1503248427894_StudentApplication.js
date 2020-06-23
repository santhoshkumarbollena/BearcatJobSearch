'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentApplicationSchema extends Schema {
  up () {
    this.create('StudentApplication', (table) => {

        table.integer('StudentId').references('Student.StudentId').onDelete('cascade')

        table.integer('JobId').references('Jobs.JobId').onDelete('cascade')
        table.string('Status',20).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('StudentApplication')
  }
}

module.exports = StudentApplicationSchema
