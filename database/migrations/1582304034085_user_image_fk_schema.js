'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up() {
    this.table('users', table => {
      // alter table
      table
        .integer('image_id')
        .unsigned()
        .references('id')
        .inTable('images')
    })
  }

  down() {
    this.table('users', table => {
      // reverse alternations
      table.dropForeign('image_id')
    })
  }
}

module.exports = UserImageFkSchema
