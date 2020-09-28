const db = require('../db/db.config')
const Data = db.asset
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        tag_id: req.body.tag_id,
        description:req.body.description,
        categoryId: req.body.categoryId,
        brandId: req.body.brandId,
        modelId: req.body.modelId,
        serial_no: req.body.serial_no,
        siteId: req.body.siteId,
        locationId: req.body.locationId,
        departmentId: req.body.departmentId,
        lastOpname: req.body.lastOpname,
        statusId: req.body.statusId,
        instanceId: req.body.instanceId,
        companyId: req.body.companyId,
        regionId: req.body.regionId,        
        isActive: req.body.isActive,
        cost: req.body.cost,
        purchaseId:req.body.purchaseId
    }).then(result => {
        console.log(req.body.specificationValue)
        result.setSpecificationValues(req.body.specificationValue)
        .then(() => {
            response(res, true, 'Asset Create', result)
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
        employeeId : req.body.employeeId,
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
    Data.destroy({where:params}).then(result => {
        response(res, true, 'category asset deleted', result)
    }).catch(error => {
        response(res, false, 'cannot delete category asset', error)
    })

}