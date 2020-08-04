const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')
module.exports = function (app) {
    const controller = require('../controller/employee.controller')

    app.get('/count/employee/:filterBy', controller.countEmployee)

    app.post('/masterEmployees/create/', controller.createEmployee)

    app.get('/masterEmployees/read/', controller.readAllEmployee)

    app.post('/auth/employee/signin/', controller.signin);
}