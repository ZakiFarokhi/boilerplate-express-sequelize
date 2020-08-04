const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')
module.exports = function (app) {
    const controller = require('../controller/masterAsset.controller')

    app.get('/count/asset/:filterBy', controller.countAsset)

    app.get('/masterAssets/read/', controller.readAssets)

    app.get('/masterAssets/read/:id', controller.readAsset)

    app.post('/masterAssets/create/', controller.createAsset)

    app.patch('/masterAssets/update/:id', controller.updateAsset)

    //app.delete('/masterAssets/delete/:id', controller.de)  
} 