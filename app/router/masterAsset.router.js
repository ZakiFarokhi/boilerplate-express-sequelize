module.exports = function (app) {
    const controller = require('../controller/masterAsset.controller')

    app.get('/count/asset/:filterBy', controller.countAsset)

    app.get('/v1/assets/', controller.readAssets)

    app.post('/v1/asset/', controller.createAsset)

    app.get('/v1/asset/:id', controller.readAsset)
} 