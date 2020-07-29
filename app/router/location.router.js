module.exports = function (app) {
    const controller = require('../controller/location.controller')

    app.get('v1/locations/', controller.readAllLocation)
    app.get('v1/location/:id', controller.readLocation)
    app.post('v1/location/', controller.createLocation)
}