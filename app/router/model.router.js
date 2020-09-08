module.exports = function(app) {
    const controller = require('../controller/model.controller')

    app.get('/models/read/', controller.readAllData)

    app.get('/models/read/:param', controller.readData)

    app.post('/models/create/', controller.createData)

    app.patch('/models/update/:param', controller.updateData)

    app.delete('/models/delete/:param', controller.deleteData)


}