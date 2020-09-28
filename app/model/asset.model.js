module.exports = (sequelize, Sequelize) => {
    const masterAsset = sequelize.define('asset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, tag_id: {
            type: Sequelize.STRING(50),
            uniqueKey: true
        }, description: {
            type: Sequelize.STRING
        }, serial_no: {
            type: Sequelize.INTEGER,
            uniqueKey: true
        }, lastOpname: {
            type: Sequelize.DATEONLY
        }, isActive: {
            type: Sequelize.BOOLEAN
        }, cost: {
            type: Sequelize.DECIMAL
        }
    })
    return masterAsset;
}