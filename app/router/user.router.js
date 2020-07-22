const verifySignUp = require('../middleware/authentication/verifySignUp');
const authJwt = require('../middleware/authentication/verifyJwtToken');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/user.controller');

    app.get('/count/user/:filterBy', controller.countUser)

    app.post('/auth/user/signup', controller.createUser);

    app.post('/user/signup/:table/:action/:roleId', checkAction.tableActionAccessCheck, verifySignUp.checkDuplicateUserNameOrEmail ,controller.createUser);
   
    app.post('/auth/user/signin', controller.signin);

    app.get('/v1/:table/:action/:roleId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readUsers) // read All User

    app.get('/v1/:table/:action/:roleId/:userId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.readUser) //read specific user
    
    app.put('/v1/:table/:action/:roleId/:userId', authJwt.verifyToken,checkAction.tableActionAccessCheck, controller.updateUser);
	
	app.delete('/v1/:table/:action/:roleId/:userId', authJwt.verifyToken, checkAction.tableActionAccessCheck, controller.deleteUser)
}