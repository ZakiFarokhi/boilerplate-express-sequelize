module.exports = function(app) {
    const controller = require('../controller/eventAsset.controller')

    app.get('/eventAssets/read/', controller.readAllData)

    app.get('/eventAssets/read/:param', controller.readData)

    app.post('/eventAssets/create/', controller.createData)

    app.patch('/eventAssets/update/:param', controller.updateData)

    app.delete('/eventAssets/delete/:param', controller.deleteData)


}