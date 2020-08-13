const VerifySignUp = require('../middleware/authentication/signUpVerify')

module.exports = function(app) {
    const controller = require('../controller/user.controller');

    app.get('/count/user/:filterBy', controller.countUser)

    app.post('/auth/user/signup/', controller.createUser);
   
    app.post('/auth/user/signin/', controller.signin);

    //see middleware.controller
    app.get('/users/read/', controller.readUsers)

    app.get('/users/read/:param', controller.readUser)

    app.post('/users/create/', controller.createUserByAdmin)

    app.patch('/users/update/:param', controller.updateUser)

    app.delete('/users/delete/:param', controller.deleteUser)

}