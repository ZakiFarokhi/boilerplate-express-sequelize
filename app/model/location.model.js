module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.INTEGER
        }
    })
    return Location
}