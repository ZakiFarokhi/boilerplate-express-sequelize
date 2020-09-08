module.exports = function(app) {
    const controller = require('../controller/region.controller')

    app.get('/regions/read/', controller.readAllData)

    app.get('/regions/read/:param', controller.readData)

    app.post('/regions/create/', controller.createData)

    app.patch('/regions/update/:param', controller.updateData)

    app.delete('/regions/delete/:param', controller.deleteData)


}