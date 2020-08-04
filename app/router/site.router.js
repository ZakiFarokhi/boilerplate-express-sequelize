module.exports = function(app){
    const controller = require('../controller/site.controller')

    app.get('/sites/read/', controller.readAllSite)

    app.get('/sites/read/:id', controller.readSite)

    app.post('/sites/create/', controller.createSite)

    // app.put('/site/update/:id', controller.updateUser)

    // app.delete('/site/delete/:id', controller.deleteUser)

}