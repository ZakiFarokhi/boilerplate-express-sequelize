
module.exports = (sequelize, Sequelize) => {
    const SpecificationValueToAsset = sequelize.define('specificationValueToAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    return SpecificationValueToAsset
}
