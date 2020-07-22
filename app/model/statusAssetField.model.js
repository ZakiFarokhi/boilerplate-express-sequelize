module.exports = (sequelize, Sequelize) => {
    const statusAssetField = sequelize.define('statusAssetField', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, field: {
            type: Sequelize.STRING
        }, exValue: {
            type: Sequelize.STRING
        }, description: {
            type: Sequelize.STRING
        }, createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return statusAssetField;
}