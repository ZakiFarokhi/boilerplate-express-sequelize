module.exports = function(app) {
    const controller = require('../controller/ownershipArea.controller')

    app.get('/ownershipAreas/read/', controller.readAllData)

    app.get('/ownershipAreas/read/:param', controller.readData)

    app.post('/ownershipAreas/create/', controller.createData)

    app.patch('/ownershipAreas/update/:param', controller.updateData)

    app.delete('/ownershipsAreas/delete/:param', controller.deleteData)


}