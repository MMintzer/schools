const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('school', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
