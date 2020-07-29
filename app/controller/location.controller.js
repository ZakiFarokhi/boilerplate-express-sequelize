const db = require('../config/db.config')
const Location = db.location
const response = require('../middleware/response/responseHandling')
const Site = db.site
exports.readAllLocation = (req, res) =>{
    Location.findAll({

    }).then(result => {
        response(res, true, 'all location retrieved', result)
    }).catch(err => {
        responq(res, false, 'cannot retrieve location', err)
    })
}
exports.readLocation = (req, res) => {
    Location.findOne({
        where: {
            id : req.params.id
        },
        include : [
            {model: Site}
        ]
    }).then(result => {
        response(res, true, 'location retrieved', result)
    }).catch(err => {
        response(res, false, 'cannot get location', err)
    })
}
exports.createLocation = (req, res) => {
    Location.create({
        name : req.body.name,
        description : req.body.description,
        createdBy : req.body.createdBy
    }).then(result => {
        response(res, true, 'location create', result)
    }).catch(err =>{
        response(res, false, 'cannot create location', err)
    })
}