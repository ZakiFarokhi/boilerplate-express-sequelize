module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define('Instance', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        }
    });
    return Model;
}