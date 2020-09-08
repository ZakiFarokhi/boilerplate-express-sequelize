module.exports = function(app) {
    const controller = require('../controller/brand.controller')

    app.get('/brands/read/', controller.readAllData)

    app.get('/brands/read/:param', controller.readData)

    app.post('/brands/create/', controller.createData)

    app.patch('/brands/update/:param', controller.updateData)

    app.delete('/brands/delete/:param', controller.deleteData)


}