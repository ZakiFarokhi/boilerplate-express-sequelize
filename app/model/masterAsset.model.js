module.exports = (sequelize, Sequelize) => {
    const masterAsset = sequelize.define('masterAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, tag_id: {
            type: Sequelize.STRING
        }, description: {
            type: Sequelize.STRING
        }, purchase_date: {
            type: Sequelize.DATE
        }, purchase_from: {
            type: Sequelize.STRING
        }, purchase_cost: {
            type: Sequelize.DECIMAL
        }, brand: {
            type: Sequelize.STRING
        }, model: {
            type: Sequelize.STRING
        }, serial_no: {
            type: Sequelize.INTEGER
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
        }, createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return masterAsset;
}