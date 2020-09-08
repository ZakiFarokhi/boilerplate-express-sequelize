module.exports = function(app) {
    const controller = require('../controller/employee.controller')

    app.get('/employees/read/', controller.readAllData)

    app.get('/employees/read/:param', controller.readData)

    app.post('/employees/create/', controller.createData)

    app.patch('/employees/update/:param', controller.updateData)

    app.delete('/employees/delete/:param', controller.deleteData)


}