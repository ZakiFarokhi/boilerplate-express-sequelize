module.exports = function (app) {
    const controller = require('../controller/department.controller')
    app.get('v1/departments/', controller.readAllDepartment)
    app.post('v1/department/', controller.createDepartment)
}