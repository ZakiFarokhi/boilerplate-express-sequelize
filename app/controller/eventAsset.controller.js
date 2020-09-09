const db = require('../db/db.config')
const Data = db.eventAsset
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        document: req.body.document
    }).then(result => {
        response(res, true, 'category asset created', result)
    }).catch(error => {
        response(res, false, 'cannot create category asset', error)
    })
}
exports.readAllData = (req, res) => {
    console.log('retrieve all')
    Data.findAll({
          include: [{ all: true, nested: false }]
    }).then(result => {
        response(res, true, 'category asset retrieve', result)
    }).catch(error => {
        console.log(error)
        response(res, false, 'cannot read category asset', error)
    })
}
exports.readData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.findOne({
        where: params,
        include: [{ all: true, nested: false }]
    }).then(result => {
        response(res, true, 'category asset retrieve', result)
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.updateData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.update({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        document: req.body.document
    }).then(result => {
        response(res, true, 'category asset updated', result)
    }).catch(error => {
        response(res, false, 'category asset not updated', error)
    })

}
exports.deleteData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.destroy().then(result => {
        response(res, true, 'category asset deleted', result)
    }).catch(error => {
        response(res, false, 'cannot delete category asset', error)
    })

}