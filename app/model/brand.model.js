module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define('brand', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        }
    })
    return Brand
}