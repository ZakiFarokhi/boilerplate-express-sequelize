module.exports = (sequelize, Sequelize) => {
    const Site = sequelize.define('site', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(50)
        },
        address: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING(50)
        },
        province: {
            type: Sequelize.STRING(50)
        },
        zip: {
            type: Sequelize.STRING(10),
            uniqueKey: true
        },
        country: {
            type: Sequelize.STRING(50)
        }
    })

    return Site
}