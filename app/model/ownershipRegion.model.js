module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define('region', {
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