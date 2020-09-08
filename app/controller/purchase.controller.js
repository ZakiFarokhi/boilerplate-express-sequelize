const db = require('../db/db.config')
const Data = db.purchase
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        purchase_order_number: req.body.purchase_order_number,
        purchase_date: req.body.purchase_date,
        purchase_from: req.body.purchase_from,
        purchase_cost: req.body.purchase_cost,
        purchase_doc: req.body.purchase_doc
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
        purchase_order_number: req.body.purchase_order_number,
        purchase_date: req.body.purchase_date,
        purchase_from: req.body.purchase_from,
        purchase_cost: req.body.purchase_cost,
        purchase_doc: req.body.purchase_doc
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