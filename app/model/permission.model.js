module.exports = (sequelize, Sequelize) => {
	const Permission = sequelize.define('permissions', {
	  permission_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
	  table: {
		    type: Sequelize.STRING
      },
      action: { //or scope
        type: Sequelize.TEXT
      }

	});
	return Permission;
}