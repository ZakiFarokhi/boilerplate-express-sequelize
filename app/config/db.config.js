const env =require('./env.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect, //configure db Microsoft SQL Server
    operatorsAliases: '0',
    timezone : '+07:00',

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
})

const db ={};

db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting config with model schema
db.user = require('../model/user.model')(sequelize, Sequelize)
db.role = require('../model/role.model')(sequelize, Sequelize)
db.permission = require('../model/permission.model')(sequelize, Sequelize)
db.employee = require('../model/masterEmployee.model')(sequelize, Sequelize)
db.statusEmployee = require('../model/statusEmployee.model')(sequelize, Sequelize)

db.categoryAsset = require('../model/categoryAsset.model')(sequelize, Sequelize)
db.specificationAsset = require('../model/specificationAsset.model')(sequelize, Sequelize)
db.specificationAssetValue = require('../model/specificationAssetValue.model')(sequelize, Sequelize)
db.masterAsset = require('../model/masterAsset.model')(sequelize, Sequelize)

db.site = require('../model/site.model')(sequelize, Sequelize)
db.location = require('../model/location.model')(sequelize, Sequelize)
db.department = require('../model/department.model')(sequelize, Sequelize)

db.statusAsset = require('../model/statusAsset.model')(sequelize, Sequelize)
db.statusAssetField = require('../model/statusAssetField.model')(sequelize, Sequelize)
db.statusAssetValue = require('../model/statusAssetValue.model')(sequelize, Sequelize)
db.logAsset = require('../model/logAsset.model')(sequelize, Sequelize)

//initialize association
db.role.hasMany(db.user)
db.user.belongsTo(db.role )

const roleToPermission = sequelize.define('roleToPermission', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
});
db.role.belongsToMany(db.permission,
    { through: roleToPermission, foreignKey: 'role_id'})
db.permission.belongsToMany(db.role,
    { through: roleToPermission, foreignKey: 'permission_id'})

db.statusEmployee.hasMany(db.employee, {foreignKey: 'statusEmployeeId'})    
db.employee.belongsTo(db.statusEmployee )

const categoryToSpecification = sequelize.define('categoryToSpecification',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})
db.categoryAsset.belongsToMany(db.specificationAsset,
    {through:categoryToSpecification, foreignKey: 'categoryAsset_id'})
db.specificationAsset.belongsToMany(db.categoryAsset,{
    through:categoryToSpecification, foreignKey: 'specificationAsset_id'})

db.specificationAsset.hasMany(db.specificationAssetValue)
db.specificationAssetValue.belongsTo(db.specificationAsset)

db.statusAsset.hasMany(db.masterAsset)
db.masterAsset.belongsTo(db.statusAsset)
db.categoryAsset.hasMany(db.masterAsset)
db.masterAsset.belongsTo(db.categoryAsset)


module.exports = db;