module.exports = (sequelize, Sequelize) => {
    const SpecificationAssetValue =
        sequelize.define('specificationAssetValue', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            }, createdBy: {
                type: Sequelize.INTEGER
            }

        })
    return SpecificationAssetValue
}