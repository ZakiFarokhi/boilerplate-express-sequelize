const db = require('../config/db.config')
const Site = db.site;
const response = require('../middleware/response/responseHandling')
const Location = db.location
exports.readAllSite = (req, res) => {
    Site.findAll({
        include : [
            {model: Location}
        ]
    }).then(result => {
            response(res, true, 'all site retrieved', result)
    }).catch(er => {
            response(res, false, 'cannot retrieved site', site)
    })
}
exports.readSite = (req, res) => {
    Site.findOne({
        where : {
            id:req.params.id
        },
        include : [
            {model : Location }
        ]
    }).then(result => {
        response(res, true, 'site retrieved', result)
    }).catch(err => {
        response(res, false, 'cannot retrieved site', err)
    })
}
exports.createSite = (req, res) => {
    Site.create({
        name : req.body.name,
        address : req.bory.address,
        city : req.body.city,
        province : req.body.province,
        zip : req.body.zip,
        country : req.body.country,
        createdBy : req.body.createdBy
    }).then(result => {
        response(res, true, 'site created', result)
    }).catch(err => {
        response(res, false, 'cannot create site', result)
    })
}