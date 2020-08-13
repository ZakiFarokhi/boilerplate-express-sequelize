module.exports = function(app) {

    const controller = require('../controller/role.controller')
    
    app.get('/roles/read/', controller.readAllRole)

    app.get('/roles/read/:param', controller.readRole)

    app.post('/roles/create/', controller.createRole)

    app.patch('/roles/update/:param', controller.updateRole)

    app.delete('/roles/delete/:param', controller.deleteRole)

}
