module.exports = (sequelize, Sequelize)  => {
    const User =sequelize.define('user', {
        id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(20)
		},
		email: {
			type: Sequelize.STRING(50),
			validate : {
				isEmail:true
			}
		},
		password: {
			type: Sequelize.STRING(20)
		},
    })
    return User
}