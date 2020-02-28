'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async model => {
      model.token = await str_random(25)
      const experies_at = new Date()
      experies_at.setMinutes(experies_at.getMinutes() + 30)
      model.experies_at = experies_at
    })
  }

  // Formatar os valores para o banco de dados
  static get dates() {
    return ['created_at', 'updated_at', 'expires_at']
  }
}

module.exports = PasswordReset
