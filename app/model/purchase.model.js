module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define('purchase', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        purchase_order_number: {
            type: Sequelize.STRING(100)
        },
        purchase_date: {
            type: Sequelize.DATEONLY
        },
        purchase_from: {
            type: Sequelize.STRING(100)
        },
        purchase_doc: {
            type: Sequelize.STRING
        }
    });
    return Purchase;
}