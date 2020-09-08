module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
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
    })
    return Category
}