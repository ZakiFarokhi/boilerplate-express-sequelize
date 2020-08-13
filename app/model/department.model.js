module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define('department', {
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
        }
    })

    return Department
}