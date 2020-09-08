module.exports = (sequelize, Sequelize) => {
    const statusAsset = sequelize.define('status', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, name: {
            type: Sequelize.STRING(50)
        }, description: {
            type: Sequelize.STRING
        }, 
    })
    return statusAsset;
}