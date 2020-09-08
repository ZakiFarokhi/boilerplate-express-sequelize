module.exports = function(app) {
    const controller = require('../controller/company.controller')

    app.get('/companies/read/', controller.readAllData)

    app.get('/companies/read/:param', controller.readData)

    app.post('/companies/create/', controller.createData)

    app.patch('/companies/update/:param', controller.updateData)

    app.delete('/companies/delete/:param', controller.deleteData)


}