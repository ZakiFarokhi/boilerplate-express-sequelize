module.exports = function(app) {
    const controller = require('../controller/specification.controller')

    app.get('/specifications/read/', controller.readAllData)

    app.get('/specifications/read/:param', controller.readData)

    app.post('/specifications/create/', controller.createData)

    app.patch('/specifications/update/:param', controller.updateData)

    app.delete('/specifications/delete/:param', controller.deleteData)


}