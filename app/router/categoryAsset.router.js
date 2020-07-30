module.exports = function(app) {
    const controller = require('../controller/categoryAsset.controller')

    app.get('/v1/categorys/', controller.readAllCategoryAsset)

    app.get('/v1/category/:id', controller.readCategoryAsset)

    app.post('v1/category/', controller.createCategoryAsset)
}