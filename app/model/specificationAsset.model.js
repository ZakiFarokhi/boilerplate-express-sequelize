module.exports = (sequelize, Sequelize) => {
    const SpecificationAsset = sequelize.define('specificationAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        dataType: {
            type: Sequelize.STRING
        },
        isRequired: {
            type: Sequelize.BOOLEAN
        },
        createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return SpecificationAsset
}