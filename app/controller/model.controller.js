const db = require('../db/db.config')
const Data = db.model
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        name: req.body.name,
        brandId: req.body.brandId
    }).then(result => {
        console.log(req.body.specificationValue)
        result.setSpecificationValues(req.body.specificationValue)
        .then(() => {
            response(res, true, 'Asset Create', result)
        }).catch(err => {
            response(res, false, 'asset not create', err)
        })
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
    console.log(req.body.specificationValue)
    Data.update({
        name: req.body.name,
        specificationValues:req.body.specificationValue
    }, {where: params}).then(result => {
        
        response(res, true, 'category asset updated', result)
        // result.addSpecificationValues(req.body.specificationValue, {through: {name: req.body.name}})
        // .then(() => {
        //     response(res, true, 'category asset updated', result)
        // }).catch(err => {
        //     response(res, false, 'asset not create', err)
        // })
        
    }).catch((error) => {
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