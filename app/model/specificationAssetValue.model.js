module.exports = (sequelize, Sequelize) => {
    const SpecificationAssetValue = 
        sequelize.define('specificationAssetValue', {
            specificationAssetValue_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING
            },
            
        })
    return SpecificationAssetValue
}