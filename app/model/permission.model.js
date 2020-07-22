module.exports = (sequelize, Sequelize) => {
  const Permission = sequelize.define('permissions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    table: {
      type: Sequelize.STRING
    },
    action: { //or scope
      type: Sequelize.TEXT
    }, 
    createdBy: {
      type: Sequelize.INTEGER
    }

  });
  return Permission;
}