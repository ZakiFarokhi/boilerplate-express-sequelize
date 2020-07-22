module.exports = (sequelize, Sequelize) => {
    const statusAsset = sequelize.define('statusAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, name: {
            type: Sequelize.STRING
        }, description: {
            type: Sequelize.STRING
        }, createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return statusAsset;
}