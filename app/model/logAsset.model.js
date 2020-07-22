module.exports = (sequelize, Sequelize) => {
    const logAsset = sequelize.define('logAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, startDate: {
            type: Sequelize.DATE
        }, endDate: {
            type: Sequelize.DATE
        }, assignTo : {
            type: Sequelize.STRING
        }, isActive : {
            type: Sequelize.STRING
        }, masterAssetId : {
            type: Sequelize.INTEGER
        }, statusAssetId : {
            type: Sequelize.STRING
        }, createdBy :{
            type: Sequelize.INTEGER
        } 
    })
    return logAsset
}