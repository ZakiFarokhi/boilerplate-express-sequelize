module.exports = function(app) {
    const controller = require('../controller/ownership.controller')

    app.get('/ownerships/read/', controller.readAllData)

    app.get('/ownerships/read/:param', controller.readData)

    app.post('/ownerships/create/', controller.createData)

    app.patch('/ownerships/update/:param', controller.updateData)

    app.delete('/ownerships/delete/:param', controller.deleteData)


}