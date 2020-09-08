module.exports = (sequelize, Sequelize) => {
    const EventAsset = sequelize.define('eventAsset', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        },
        description: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATEONLY
        },
        document: {
            type: Sequelize.STRING
        }
    })

    return EventAsset
}