module.exports = function(app) {
    const controller = require('../controller/instance.controller')

    app.get('/instances/read/', controller.readAllData)

    app.get('/instances/read/:param', controller.readData)

    app.post('/instances/create/', controller.createData)

    app.patch('/instances/update/:param', controller.updateData)

    app.delete('/instances/delete/:param', controller.deleteData)


}