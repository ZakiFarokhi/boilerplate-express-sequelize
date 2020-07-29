const verifySignUp = require('../middleware/authentication/signUpVerify');
const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/user.controller');

    app.get('/count/user/:filterBy', controller.countUser)

    app.post('/auth/user/signup/', controller.createUser);

    //app.put('/auth/user/signup/:id', controller.createDeep);

    //app.post('/user/signup/:tb/:act/', controller.createUser);
   
    app.post('/auth/user/signin/', controller.signin);

    app.get('/v1/users/',   controller.readUsers) // read All User

    app.get('/v1/user/:id/',   controller.readUser) //read specific user
    
    app.patch('/v1/user/:id/',  controller.updateUser);
	
	app.delete('/v1/user/:id/', controller.deleteUser)
}