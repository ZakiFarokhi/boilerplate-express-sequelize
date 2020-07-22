module.exports = (sequelize, Sequelize) => {
    const Site = sequelize.define('site', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        province: {
            type: Sequelize.STRING
        },
        zip: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        createdBy: {
            type: Sequelize.INTEGER
        }
    })

    return Site
}