module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        }
    })
    return Location
}