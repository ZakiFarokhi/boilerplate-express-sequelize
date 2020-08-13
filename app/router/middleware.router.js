const authJwt = require('../middleware/authorization/verifyAction');
const checkAction = require('../middleware/authorization/')

module.exports = function (app) {

    app.all('/v1/:table/:action/',authJwt, checkAction.verifyTableAccess,checkAction.bridgesRoute)
    
    app.all('/v1/:table/:action/:param',authJwt, checkAction.verifyTableAccess,checkAction.bridgesRoute)
}