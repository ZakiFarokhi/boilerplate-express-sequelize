module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('masterEmployee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, name: {
            type: Sequelize.STRING
        }, title: {
            type: Sequelize.STRING
        }, phone: {
            type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
        }, email: {
            type: Sequelize.STRING
        }, password: {
            type: Sequelize.STRING
        }, isActive: {
            type: Sequelize.INTEGER
        }, createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return Employee
}