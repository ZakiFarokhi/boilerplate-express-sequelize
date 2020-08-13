module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('masterEmployee', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, IdEmployee: {
            type: Sequelize.STRING(20),
            unique: true
        }, name: {
            type: Sequelize.STRING(50)
        }, title: {
            type: Sequelize.STRING(20)
        }, phone: {
            type: Sequelize.INTEGER.UNSIGNED.ZEROFILL
        }, email: {
            type: Sequelize.STRING(40),
            unique :true,
            validate : {
				isEmail:true
			}
        }, password: {
            type: Sequelize.STRING(40)
        }, isActive: {
            type: Sequelize.INTEGER
        },
    })
    return Employee
}