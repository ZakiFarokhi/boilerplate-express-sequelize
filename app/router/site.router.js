module.exports = function(app){
    const controller = require('../controller/site.controller')

    app.get('/v1/sites/', controller.readAllSite)
    app.get('/v1/site/:id', controller.readSite)
    app.post('/v1/site/', controller.createSite)
}