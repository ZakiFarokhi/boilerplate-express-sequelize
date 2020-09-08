module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, IdEmployee: {
            type: Sequelize.STRING(20),
            uniqueKey: true
        }, name: {
            type: Sequelize.STRING(50)
        }, title: {
            type: Sequelize.STRING(20)
        }, phone: {
            type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
        }, email: {
            type: Sequelize.STRING(40),
            uniqueKey :true,
            validate : {
				isEmail:true
			}
        }, password: {
            type: Sequelize.STRING(40)
        }, isActive: {
            type: Sequelize.INTEGER
        }, site: {
            type: Sequelize.STRING(50)
        }, location: {
            type: Sequelize.STRING(50)
        }, department: {
            type: Sequelize.STRING(50)
        }, status: {
            type: Sequelize.STRING(50)
        }
    })
    return Employee
}