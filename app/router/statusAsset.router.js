module.exports = function(app) {
    const controller = require('../controller/statusAsset.controller')
    
    app.get('/statusAssets/read/', controller.readAllStatusAsset)

    app.get('/statusAssets/read/:id', controller.readStatusAsset)

    app.post('/statusAssets/create/', controller.createStatusAsset)

    app.patch('/statusAssets/update/:id', controller.updateStatusAsset)

    app.delete('/statusAssets/delete/:id', controller.deleteStatusAsset)


}