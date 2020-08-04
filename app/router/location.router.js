const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')
module.exports = function (app) {
    const controller = require('../controller/location.controller')

    // app.get('v1/:table/:action/',authJwt, checkAction.verifyTableAccess, checkAction.bridgesRoute('LOCATION', 'READ'), controller.readAllLocation)
    // app.get('v1/:table/:action/:id',authJwt, checkAction.verifyTableAccess, checkAction.bridgesRoute('LOCATION', 'READ'), controller.readLocation)
    // app.post('v1/:table/:action/',authJwt, checkAction.verifyTableAccess, checkAction.bridgesRoute('LOCATION', 'CREATE' ), controller.createLocation)

    app.get('/locations/read/', controller.readAllLocation)

    app.get('/locations/read/:id', controller.readLocation)

    app.post('/locations/create/', controller.createLocation)

    // app.put('/locations/update/:id', controller.updateUser)

    // app.delete('/locations/delete/:id', controller.deleteUser)

}