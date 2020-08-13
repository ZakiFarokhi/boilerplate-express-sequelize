module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('role', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(50)
    },
    description: {
      type: Sequelize.STRING
    }
  });
  return Role;
}