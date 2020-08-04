
module.exports = function(app) {
    const controller = require('../controller/specificationAsset.controller')

    app.get('/specificationAssets/read/', controller.readAllSpecificationAsset)

    app.get('/specificationAssets/read/:id', controller.readSpecificationAsset)

    app.post('/specificationAssets/create/', controller.createSpecificationAsset)

    app.patch('/specificationAssets/update/:id', controller.updateSpecificationAsset)

    app.delete('/specificationAssets/delete/:id', controller.deleteSpecificationAsset)


}