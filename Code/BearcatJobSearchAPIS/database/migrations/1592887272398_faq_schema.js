'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FAQSchema extends Schema {
  up () {
    this.create('FAQ', (table) => {
      table.integer('FAQId').primary()
      table.string('FAQQuestion', 100).notNullable()
      table.string('FAQAnswer', 500).notNullable()
      table.string('category', 40).notNullable()
      table.string('role', 40).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('FAQ')
  }
}

module.exports = FAQSchema
