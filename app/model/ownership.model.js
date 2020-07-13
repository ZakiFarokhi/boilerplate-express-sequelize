module.exports = (sequelize, Sequelize) => {
    const Ownership = sequelize.define('ownership',{
        ownership_id: {
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
    return Ownership
}