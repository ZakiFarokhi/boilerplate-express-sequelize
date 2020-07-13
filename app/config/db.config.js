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

db.user = require('../model/user.model')(sequelize, Sequelize)
db.role = require('../model/role.model')(sequelize, Sequelize)
db.permission = require('../model/permission.model')(sequelize, Sequelize)

db.categoryAsset = require('../model/categoryAsset.model')(sequelize, Sequelize)
db.specificationAsset = require('../model/specificationAsset.model')(sequelize, Sequelize)
db.specificationAssetValue = require('../model/specificationAssetValue.model')(sequelize, Sequelize)
db.ownership = require('../model/ownership.model')(sequelize, Sequelize)
db.ownershipArea = require('../model/ownershipArea.model')(sequelize, Sequelize)

db.role.hasMany(db.user, {foreignKey:'role_id'})
db.user.belongsTo(db.role, {foreignKey: 'user_id'})

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

db.specificationAsset.hasMany(db.specificationAssetValue,{foreignKey: 'specificationAsset_id'})
db.specificationAssetValue.belongsTo(db.specificationAsset,{foreignKey: 'specificationAssetValue_id'})

db.ownership.hasMany(db.ownershipArea, {foreignKey: 'ownersip_id'})
db.ownershipArea.belongsTo(db.ownership, {foreignKey: 'ownershipArea_id'})

module.exports = db;