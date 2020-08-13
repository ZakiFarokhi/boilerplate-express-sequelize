const Sequelize = require('sequelize')
const seq = require('./db.config')

const db = {};
db.Sequelize = Sequelize
db.sequelize = seq

db.user = require('../model/user.model')(seq, Sequelize)
db.role = require('../db/db.config')

db.role.hasMany(db.user)
db.user.belongsTo(db.role)

module.exports = db
