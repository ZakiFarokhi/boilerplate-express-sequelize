const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')
module.exports = function(app) {
    const controller = require('../controller/categoryAsset.controller')

    app.get('/categoryAssets/read/', controller.readAllCategoryAsset)

    app.get('/categoryAssets/read/:id', controller.readCategoryAsset)

    app.post('/categoryAssets/create/', controller.createCategoryAsset)

    app.patch('/categoryAssets/update/:id', controller.updateCategoryAsset)

    app.delete('/categoryAssets/delete/:id', controller.deleteCategoryAsset)


}