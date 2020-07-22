module.exports = (sequelize, Sequelize) => {
    const statusAssetValue = sequelize.define('statusAssetValue', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: Sequelize.STRING
        },
        statusAssetFieldId: {
            type: Sequelize.INTEGER
        },
        logAssetId: {
            type: Sequelize.INTEGER
        },
        createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return statusAssetValue
}