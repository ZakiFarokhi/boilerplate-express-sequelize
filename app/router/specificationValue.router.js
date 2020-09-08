module.exports = function(app) {
    const controller = require('../controller/specificationValue.cotroller')

    app.get('/specificationValues/read/', controller.readAllData)

    app.get('/specificationValues/read/:param', controller.readData)

    app.post('/specificationValues/create/', controller.createData)

    app.patch('/specificationValues/update/:param', controller.updateData)

    app.delete('/specificationValues/delete/:param', controller.deleteData)


}