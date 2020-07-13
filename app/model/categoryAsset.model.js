module.exports = (sequelize, Sequelize) => {
    const CategoryAsset = sequelize.define('categoryAsset', {
        categoryAsset_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    })
    return CategoryAsset;
}