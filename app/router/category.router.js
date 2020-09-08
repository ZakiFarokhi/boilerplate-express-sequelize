module.exports = function(app) {
    const controller = require('../controller/category.controller')

    app.get('/categories/read/', controller.readAllData)

    app.get('/categories/read/:param', controller.readData)

    app.post('/categories/create/', controller.createData)

    app.patch('/categories/update/:param', controller.updateData)

    app.delete('/categories/delete/:param', controller.deleteData)


}