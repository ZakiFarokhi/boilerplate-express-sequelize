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
db.asset = require('../model/asset.model')(sequelize, Sequelize)
db.brand = require('../model/brand.model')(sequelize, Sequelize)
db.category = require('../model/category.model')(sequelize, Sequelize)
db.department = require('../model/department.model')(sequelize, Sequelize)
db.employee = require('../model/employee.model')(sequelize, Sequelize)
db.eventAsset = require('../model/eventAsset.model')(sequelize, Sequelize)
db.location = require('../model/location.model')(sequelize, Sequelize)
db.model = require('../model/model.model')(sequelize, Sequelize)
db.instance = require('../model/ownershipInstance.model')(sequelize, Sequelize)
db.company = require('../model/ownershipCompany.model')(sequelize, Sequelize)
db.region = require('../model/ownershipRegion.model')(sequelize, Sequelize)
db.permission = require('../model/permission.model')(sequelize, Sequelize)
db.purchase = require('../model/purchase.model')(sequelize, Sequelize)
db.site = require('../model/site.model')(sequelize, Sequelize)
db.status = require('../model/status.model')(sequelize, Sequelize)
db.specification = require('../model/specification.model')(sequelize, Sequelize)
db.specificationValue = require('../model/specificationValue.model')(sequelize, Sequelize)
db.specificationValueModel = require('../model/specificationValueModel.model')(sequelize, Sequelize)
db.specificationValueToAsset = require('../model/specificationValueToAsset.model')(sequelize, Sequelize)

db.category.hasMany(db.asset)
db.asset.belongsTo(db.category)

db.brand.hasMany(db.asset)
db.asset.belongsTo(db.brand)

db.model.hasMany(db.asset)
db.asset.belongsTo(db.model)

db.site.hasMany(db.asset)
db.asset.belongsTo(db.site)

db.location.hasMany(db.asset)
db.asset.belongsTo(db.location)

db.department.hasMany(db.asset)
db.asset.belongsTo(db.department)

db.instance.hasMany(db.asset)
db.asset.belongsTo(db.instance)

db.company.hasMany(db.asset)
db.asset.belongsTo(db.company)

db.region.hasMany(db.asset)
db.asset.belongsTo(db.region)

db.status.hasMany(db.asset)
db.asset.belongsTo(db.status)

db.purchase.hasMany(db.asset)
db.asset.belongsTo(db.purchase)

db.asset.hasMany(db.eventAsset)
db.eventAsset.belongsTo(db.asset)

db.site.hasMany(db.location)
db.location.belongsTo(db.site)

db.role.hasMany(db.user)
db.user.belongsTo(db.role)

db.category.hasMany(db.brand)
db.brand.belongsTo(db.category)

db.brand.hasMany(db.model)
db.model.belongsTo(db.brand)

db.instance.hasMany(db.company)
db.company.belongsTo(db.instance)

db.company.hasMany(db.region)
db.region.belongsTo(db.company)

db.specification.hasMany(db.specificationValue)
db.specificationValue.belongsTo(db.specification)

db.category.hasMany(db.specification)
db.specification.belongsTo(db.category)

const ValueToModel = sequelize.define('ValueToModel', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});
db.model.belongsToMany(db.specificationValue, {through: ValueToModel, foreignKey: 'model_id'})
db.specificationValue.belongsToMany(db.model, {through: ValueToModel, foreignKey: 'value_id'})

const ValueToAsset = sequelize.define('ValueToAsset', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});
db.asset.belongsToMany(db.specificationValue, {through: ValueToAsset, foreignKey: 'asset_id'})
db.specificationValue.belongsToMany(db.asset, {through: ValueToAsset, foreignKey: 'value_id'})

const roleToPermission = sequelize.define('roleToPermission', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});
db.role.belongsToMany(db.permission,
    { through: roleToPermission, foreignKey: 'role_id' })
db.permission.belongsToMany(db.role,
    { through: roleToPermission, foreignKey: 'permission_id' })

const roleToSite = sequelize.define('roleToSite', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});
db.role.belongsToMany(db.site,
    { through: roleToSite, foreignKey: 'role_id' })
db.site.belongsToMany(db.role,
    { through: roleToSite, foreignKey: 'site_id' })

db.employee.hasMany(db.asset)
db.asset.belongsTo(db.employee)

db.site.hasMany(db.employee)
db.employee.belongsTo(db.site)
db.location.hasMany(db.employee)
db.employee.belongsTo(db.location)
db.department.hasMany(db.employee)
db.employee.belongsTo(db.department)

module.exports = db

