const verifySignUp = require('../middleware/authentication/signUpVerify');
const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/user.controller');

    app.get('/count/user/:filterBy', controller.countUser)

    app.post('/auth/user/signup/', controller.createUser);
   
    app.post('/auth/user/signin/', controller.signin);

    //see middleware.controller
    app.get('/users/read/', controller.readUsers)

    app.get('/users/read/:id', controller.readUser)

    app.post('/users/create/', controller.createUser)

    app.patch('/users/update/:id', controller.updateUser)

    app.delete('/users/delete/:id', controller.deleteUser)

}