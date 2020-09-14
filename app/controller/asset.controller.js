const db = require('../db/db.config')
const Data = db.asset
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        tag_id: req.body.tag_id,
        description:req.body.description,
        category: req.body.category,
        brand: req.body.brand,
        model: req.body.model,
        serial_no: req.body.serial_no,
        site: req.body.site,
        location: req.body.location,
        department: req.body.department,
        lastOpname: req.body.lastOpname,
        status_asset: req.body.status_asset,
        instance: req.body.instance,
        company: req.body.company,
        region: req.body.region,        
        isActive: req.body.isActive,
        cost: req.body.cost,
        purchaseId:req.body.purchaseId
    }).then(result => {
        console.log(req.body.specificationValue)
        result.setSpecificationValues(req.body.specificationValue)
        .then(resp => {
            response(res, true, 'Asset Create', resp)
        }).catch(err => {
            response(res, false, 'asset not create', err)
        })
    }).catch(error => {
        response(res, false, 'cannot create asset', error)
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
    console.log(req.params.param)
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.update({
        status_asset: req.body.status_asset,
        isActive : req.body.isActive
    }, {where: params}).then(result => {
        response(res, true, 'category asset updated', result)
    }).catch(error => {
        console.log(error)
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