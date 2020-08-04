const db = require('../config/db.config')
const SpecificationAsset = db.specificationAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')

const SpecificationAssetValue = db.specificationAssetValue

exports.createSpecificationAsset = (req, res) => {
    SpecificationAssetValue.create({
        name: req.body.name,
        
    }).then(specificationAsset => {
        response(res, true, 'specification asset created', specificationAsset)
    }).catch(error => {
        response(res, false, 'cannot create specification asset', error)
    })
}
exports.readAllSpecificationAsset = (req, res) => {
    SpecificationAssetValue.findAll({
        include:[
            {model:SpecificationAsset}
        ]
    }).then(specificationAssetValue => {
        response(res, true, 'specification asset retrieve', specificationAssetValue)
    }).catch(error => {
        response(res, false, 'cannot read specification asset', error)
    })
}
exports.readSpecificationAsset = (req, res) => {
    SpecificationAssetValue.findOne({
        where: {
            id: req.params.id
        },
        include:[
            {model:SpecificationAsset}
        ]
    }).then(specificationAssetValue => {
        response(res, true, 'specification asset retrieve', specificationAssetValue)
    }).catch(error => {
        response(res, false, 'cannot read specification asset', error)
    })
}
exports.updateSpecificationAsset = (req, res) => {
    SpecificationAssetValue.findOne({
        where: {
            id: req.params.id
        }
    }).then(specificationAsset => {
        specificationAsset.update({
            name: req.body.name,
        }).then(specificationAssetValueUpdate => {
            response(res, true, 'specification asset updated', specificationAssetValueUpdate)
        }).catch(error => {
            response(res, false, 'specification asset not updated', error)
        })
    })
}
exports.deleteSpecificationAsset = (req, res) => {
    SpecificationAsset.findOne({
        where: {
            id: req.params.id
        }
    }).then(specificationAsset => {
        specificationAsset.destroy().then(specificationAssetValueDestroyed => {
            response(res, true, 'specification asset deleted', specificationAssetValueDestroyed)
        }).catch(error => {
            response(res, false, 'cannot delete specification asset', error)
        })
    }).catch(error => {
        response(res, false, 'specification asset not found', error)
    })
}