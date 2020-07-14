const verifySignUp = require('../middleware/authentication/verifySignUp');
const authJwt = require('../middleware/authentication/verifyJwtToken');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/user.controller');
    app.get('/itasset/test', function(req, res) {
        res.send("hello")
    })
    app.post('/itasset/auth/signup', controller.createSuperAdmin);

    app.post('/itasset/auth/signup/:table/:action/:roleId', checkAction.tableActionAccessCheck, verifySignUp.checkDuplicateUserNameOrEmail ,controller.createUser);
   
    app.post('/itasset/auth/signin', controller.signin);
   
    app.get('/itasset/v1/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readUsers) // read All User

    app.get('/itasset/v1/:table/:action/:roleId/:userId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readUser) //read specific user
    
    app.put('/itasset/v1/:table/:action/:roleId/:userId', authJwt.verifyToken,checkAction.tableActionAccessCheck, controller.updateUser);
	
	app.delete('/itasset/v1/:table/:action/:roleId/:userId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.deleteUser)
}