module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('department', {
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
            type: Sequelize.STRING
        }
    })

    return Department
}