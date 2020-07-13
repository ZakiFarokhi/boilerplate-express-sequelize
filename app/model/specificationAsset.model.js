module.exports = (sequelize, Sequlize)=> {
    const SpecificationAsset = sequelize.define('specificationAsset', {
        specificationAsset_id: {
            type: Sequlize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: Sequlize.STRING,
        },
        dataType: {
            type: Sequlize.STRING
        },
        isRequired: {
            type: Sequlize.BOOLEAN
        }
    })
    return SpecificationAsset
}