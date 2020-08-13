module.exports = (sequelize, Sequelize)  => {
    const User =sequelize.define('user', {
        id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING,
			validate : {
				isEmail:true
			}
		},
		password: {
			type: Sequelize.STRING
		},
    })
    return User
}