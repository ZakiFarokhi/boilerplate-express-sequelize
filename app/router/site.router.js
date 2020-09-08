module.exports = function(app) {
    const controller = require('../controller/site.controller')

    app.get('/sites/read/', controller.readAllData)

    app.get('/sites/read/:param', controller.readData)

    app.post('/sites/create/', controller.createData)

    app.patch('/sites/update/:param', controller.updateData)

    app.delete('/sites/delete/:param', controller.deleteData)


}