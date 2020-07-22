module.exports = (sequelize, Sequelize) => {
    const statusEmployee = sequelize.define('statusEmployee', {
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
    return statusEmployee
}