const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function (app) {

    app.all('/v1/:table/:action/',authJwt, checkAction.verifyTableAccess,checkAction.bridgesRoute)
    
    app.all('/v1/:table/:action/:id',authJwt, checkAction.verifyTableAccess,checkAction.bridgesRoute)
}