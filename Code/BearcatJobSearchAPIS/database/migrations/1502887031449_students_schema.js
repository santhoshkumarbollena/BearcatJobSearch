'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('Students', (table) => {
      table.increments()
      table.integer('StudentId').notNullable().unique()
      table.string('StudentName',40).notNullable()
      table.string('Email',40).notNullable()
      table.string('Password',40).notNullable()
      table.string('Resume',500)
      table.timestamp('DOB').notNullable()
      table.string('PhoneNumber',20).notNullable()
      table.string('Gender',10).notNullable()
      table.string('UGUniversity',40)
      table.string('UGDegree',40)
      table.string('UGDepartment',40)
      table.string('UGScore',10)
      table.string('GraduateUniversity',40)
      table.string('GraduateDegree',40)
      table.string('GraduateDepartment',40)
      table.string('GraduateScore',40)
      table.integer('ExperienceYears')
      table.integer('ExpectedSalary')
      table.string('EmployementType',10)
      table.string('GitHubUrl',100)
      table.string('LinkedInUrl',100)

      table.timestamps()
    })
  }

  down () {
    this.drop('Students')
  }
}

module.exports = StudentSchema
