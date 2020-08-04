const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')
module.exports = function (app) {
    const controller = require('../controller/department.controller')
   
    app.get('/departments/read/', controller.readAllDepartment)

    app.post('/departments/create/', controller.createDepartment)

    //app.get('/departments/read/:id', controller.readUser)
    
    // app.put('/departments/update/:id', controller.updateUser)

    // app.delete('/departments/delete/:id', controller.deleteUser)

}