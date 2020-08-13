module.exports = (sequelize, Sequelize) => {
    const masterAsset = sequelize.define('masterAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, tag_id: {
            type: Sequelize.STRING(50),
            uniqueKey: true
        }, description: {
            type: Sequelize.STRING
        }, purchase_date: {
            type: Sequelize.DATE
        }, purchase_from: {
            type: Sequelize.STRING(50)
        }, purchase_cost: {
            type: Sequelize.DECIMAL
        }, brand: {
            type: Sequelize.STRING(50)
        }, model: {
            type: Sequelize.STRING(50)
        }, serial_no: {
            type: Sequelize.INTEGER,
            uniqueKey: true
        }, siteId : {
            type: Sequelize.INTEGER
        }, locationId: {
            type: Sequelize.INTEGER
        }, departmentId: {
            type: Sequelize.INTEGER
        }, statusAssetId: {
            type: Sequelize.INTEGER
        }, lastOpname: {
            type: Sequelize.DATE
        },
    })
    return masterAsset;
}