module.exports = (sequelize, Sequelize) => {
    const masterAsset = sequelize.define('asset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, tag_id: {
            type: Sequelize.STRING(50),
            uniqueKey: true
        }, description: {
            type: Sequelize.STRING
        }, category: {
            type: Sequelize.STRING(50)
        }, brand: {
            type: Sequelize.STRING(50)
        }, model: {
            type: Sequelize.STRING(50)
        }, serial_no: {
            type: Sequelize.INTEGER,
            uniqueKey: true
        }, site : {
            type: Sequelize.STRING(50)
        }, location: {
            type: Sequelize.STRING(50)
        }, department: {
            type: Sequelize.STRING(50)
        }, lastOpname: {
            type: Sequelize.DATEONLY
        }, instance: {
            type: Sequelize.STRING(50)
        }, company: {
            type: Sequelize.STRING(50)
        }, region: {
            type: Sequelize.STRING(50)
        }, status_asset: {
            type: Sequelize.STRING(50)
        }, isActive: {
            type: Sequelize.BOOLEAN
        },
    })
    return masterAsset;
}