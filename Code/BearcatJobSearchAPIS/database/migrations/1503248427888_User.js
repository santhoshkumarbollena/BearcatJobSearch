'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('User', (table) => {
      table.increments()
      table.integer('UserId').notNullable().unique()
      table.string('UserName',40).notNullable()
      table.string('Role',40).notNullable()
      table.string('UserOrganization',40).notNullable()
      table.string('UserOrganizationDescription',500).notNullable()
      table.string('PhoneNumber',20).notNullable()
      table.string('Email',100).notNullable()
      table.timestamps()
    })
  }
  down () {
    this.drop('User')
  }
}

module.exports = UserSchema
