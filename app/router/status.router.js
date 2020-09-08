module.exports = function(app) {
    const controller = require('../controller/status.controller')

    app.get('/status/read/', controller.readAllData)

    app.get('/status/read/:param', controller.readData)

    app.post('/status/create/', controller.createData)

    app.patch('/status/update/:param', controller.updateData)

    app.delete('/status/delete/:param', controller.deleteData)


}