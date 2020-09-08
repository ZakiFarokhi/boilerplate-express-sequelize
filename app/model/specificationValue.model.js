module.exports = (sequelize, Sequelize) => {
    const statusAssetValue = sequelize.define('specificationValue', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: Sequelize.STRING
        }
    })
    return statusAssetValue
}