'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('Student', (table) => {
      table.increments()
      table.integer('StudentId').notNullable().unique()
      table.string('StudentName',40).notNullable()
      table.string('Email',40).notNullable()
      table.string('Password',40).notNullable()
      table.string('Resume',500).notNullable()
      table.string('PhoneNumber',20).notNullable()
      table.string('Gender',10).notNullable()
      table.string('UGUniversity',40).notNullable()
      table.string('UGDegree',40).notNullable()
      table.string('UGDepartment',40).notNullable()
      table.string('UGScore',10).notNullable()
      table.string('GraduateUniversity',40).notNullable()
      table.string('GraduateDegree',40).notNullable()
      table.string('GraduateDepartment',40).notNullable()
      table.string('GraduateScore',40).notNullable()
      table.integer('ExperienceYears')
      table.integer('ExpectedSalary')
      table.string('EmployementType',10).notNullable()
      table.string('GitHubUrl',100).notNullable()
      table.string('LinkedInUrl',100).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('Student')
  }
}

module.exports = StudentSchema
