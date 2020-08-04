module.exports = function(app) {
    const controller = require('../controller/statusEmployee.controller')
    
    app.get('/statusEmployees/read/', controller.readAllStatusEmployee)

    app.get('/statusEmployees/read/:id', controller.readStatusEmployee)

    app.post('/statusEmployees/create/', controller.createStatusEmployee)

    app.patch('/statusEmployees/update/:id', controller.updateStatusEmployee)

    app.delete('/statusEmployees/delete/:id', controller.deleteStatusEmployee)


}