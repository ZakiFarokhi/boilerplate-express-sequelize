module.exports = function(app) {
    const controller = require('../controller/asset.controller')

    app.get('/assets/read/', controller.readAllData)

    app.get('/assets/read/:param', controller.readData)

    app.post('/assets/create/', controller.createData)

    app.patch('/assets/update/:param', controller.updateData)

    app.delete('/assets/delete/:param', controller.deleteData)


}