module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('roles', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    createdBy: {
      type: Sequelize.INTEGER
    }
  });
  return Role;
}