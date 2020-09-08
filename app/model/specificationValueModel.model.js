
module.exports = (sequelize, Sequelize) => {
    const SpecificationValueModel = sequelize.define('specificationValueModel', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    return SpecificationValueModel
}
