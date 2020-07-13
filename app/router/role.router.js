const authJwt = require('../middleware/authentication/verifyJwtToken');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/role.controller')

    app.post('/itasset/dashboard/v1/operate/:table/:action')

    app.get('/itasset/dashboard/v1/operate/:table/:action', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readAllRole) // read All User

    app.get('/itasset/dashboard/v1/operate/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readRole) //read specific user
    
    app.put('/itasset/dashboard/v1/operate/:table/:action/:roleId', authJwt.verifyToken,checkAction.tableActionAccessCheck, controller.updateRole);
	
	app.delete('/itasset/dashboard/v1/operate/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.deleteRole)
    
}