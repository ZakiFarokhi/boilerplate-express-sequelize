module.exports = function(app) {
    const controller = require('../controller/purchase.controller')

    app.get('/purchases/read/', controller.readAllData)

    app.get('/purchases/read/:param', controller.readData)

    app.post('/purchases/create/', controller.createData)

    app.patch('/purchases/update/:param', controller.updateData)

    app.delete('/purchases/delete/:param', controller.deleteData)

}