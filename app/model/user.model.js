module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		startDate: {
			type: Sequelize.DATE
		},
		endDate: {
			type: Sequelize.DATE
		},
		createdBy: {
			type: Sequelize.INTEGER
		}
	});
	return User;
}