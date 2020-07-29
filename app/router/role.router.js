const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/role.controller')

    app.get('/v1/roles/', controller.readAllRole)

    // app.post('/itasset/v1/:table/:action')

    // app.get('/itasset/v1/:table/:action', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readAllRole) // read All User

    // app.get('/itasset/v1/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readRole) //read specific user
    
    // app.put('/itasset/v1/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.updateRole);
	
	// app.delete('/itasset/v1/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.deleteRole)
    
}