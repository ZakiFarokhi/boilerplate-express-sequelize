const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, //configure db Microsoft SQL Server
    operatorsAliases: '0',
    timezone: '+07:00', //indonesia GMT +7
    dialectOptions: {
     
            encrypt: true,
        
    },
    pool: {
        max: parseInt(process.env.DB_POOL_MAX),
        min: parseInt(process.env.DB_POOL_MIN),
        acquire: parseInt(process.env.DB_POOL_ACQUIRE),
        idle: parseInt(process.env.DB_POOL_IDLE),
        
    },
    
})

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../model/user.model')(sequelize, Sequelize)
db.role = require('../model/role.model')(sequelize, Sequelize)

db.role.hasMany(db.user)
db.user.belongsTo(db.role)

module.exports = db

