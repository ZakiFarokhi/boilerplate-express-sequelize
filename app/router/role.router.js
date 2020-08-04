const authJwt = require('../middleware/authentication/authJwt');
const checkAction = require('../middleware/authorization/verifyAction')

module.exports = function(app) {

    const controller = require('../controller/role.controller')

    
    app.get('/roles/read/', controller.readAllRole)

    app.get('/roles/read/:id', controller.readRole)

    app.post('/roles/create/', controller.createRole)

    app.patch('/roles/update/:id', controller.updateRole)

    app.delete('/roles/delete/:id', controller.deleteRole)

}
