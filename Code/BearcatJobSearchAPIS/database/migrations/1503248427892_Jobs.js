'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JobsSchema extends Schema {
  up () {
    this.create('Jobs', (table) => {
      table.increments()
      table.integer('JobId').notNullable().unique()
      table.string('JobTitle', 30).notNullable()
      table.string('JobDescription', 400).notNullable()
      table.integer('Salary', 40).notNullable()
      table.string('EmploymentType', 40).notNullable()
      table.integer('UserId').references('User.UserId').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('Jobs')
  }
}

module.exports = JobsSchema
