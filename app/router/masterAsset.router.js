module.exports = function (app) {
    const controller = require('../controller/masterAsset.controller')

    app.get('/count/asset/:filterBy', controller.countAsset)
} 