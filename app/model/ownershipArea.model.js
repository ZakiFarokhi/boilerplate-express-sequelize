module.exports = (sequelize, Sequelize) => {
    const OwnershipArea = sequelize.define('ownershipArea',{
        ownershipArea_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    })
    return OwnershipArea
}