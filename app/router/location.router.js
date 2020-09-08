module.exports = function(app) {
    const controller = require('../controller/location.controller')

    app.get('/locations/read/', controller.readAllData)

    app.get('/locations/read/:param', controller.readData)

    app.post('/locations/create/', controller.createData)

    app.patch('/locations/update/:param', controller.updateData)

    app.delete('/locations/delete/:param', controller.deleteData)


}