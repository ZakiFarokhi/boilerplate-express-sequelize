module.exports = function(app) {
    const controller = require('../controller/department.controller')

    app.get('/departments/read/', controller.readAllData)

    app.get('/departments/read/:param', controller.readData)

    app.post('/departments/create/', controller.createData)

    app.patch('/departments/update/:param', controller.updateData)

    app.delete('/departments/delete/:param', controller.deleteData)


}