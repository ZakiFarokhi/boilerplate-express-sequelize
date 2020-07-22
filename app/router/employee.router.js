module.exports = function (app) {
    const controller = require('../controller/employee.controller')

    app.get('/count/employee/:filterBy', controller.countEmployee)
}