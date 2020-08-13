module.exports = (sequelize, Sequelize) => {
  const Permission = sequelize.define('permissions', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    table: {
      type: Sequelize.STRING(50)
    },
    action: { //or scope
      type: Sequelize.STRING(10)
    }

  });
  return Permission;
}