module.exports = (sequelize, Sequelize) => {
    const CategoryAsset = sequelize.define('categoryAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return CategoryAsset;
}