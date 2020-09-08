module.exports = (sequelize, Sequelize) => {
    const statusAssetField = sequelize.define('specification', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, name: {
            type: Sequelize.STRING(50)
        }, description: {
            type: Sequelize.STRING
        }, DataType: {
            type: Sequelize.STRING(50)
        }
    })
    return statusAssetField;
}