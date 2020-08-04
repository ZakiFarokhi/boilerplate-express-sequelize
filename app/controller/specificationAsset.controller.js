const db = require('../config/db.config')
const SpecificationAsset = db.specificationAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')

const SpecificationAssetValue = db.specificationAssetValue

exports.createSpecificationAsset = (req, res) => {
    SpecificationAsset.create({
        name: req.body.name,
        dataType: req.body.dataType,
        isRequired: req.body.isRequired
    }).then(specificationAsset => {
        response(res, true, 'specification asset created', specificationAsset)
    }).catch(error => {
        response(res, false, 'cannot create specification asset', error)
    })
}
exports.readAllSpecificationAsset = (req, res) => {
    SpecificationAsset.findAll({
        include: { all: true, nested: true }
    }).then(specificationAsset => {
        response(res, true, 'specification asset retrieve', specificationAsset)
    }).catch(error => {
        response(res, false, 'cannot read specification asset', error)
    })
}
exports.readSpecificationAsset = (req, res) => {
    SpecificationAsset.findOne({
        where: {
            id: req.params.id
        },include: { all: true, nested: true }
    }).then(specificationAsset => {
        response(res, true, 'specification asset retrieve', specificationAsset)
    }).catch(error => {
        response(res, false, 'cannot read specification asset', error)
    })
}
exports.updateSpecificationAsset = (req, res) => {
    SpecificationAsset.findOne({
        where: {
            id: req.params.id
        }
    }).then(specificationAsset => {
        specificationAsset.update({
            name: req.body.name,
            dataType: req.body.dataType,
            isRequired: req.body.isRequired
        }).then(specificationAssetUpdate => {
            response(res, true, 'specification asset updated', specificationAssetUpdate)
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
        specificationAsset.destroy().then(specificationAssetDestroyed => {
            response(res, true, 'specification asset deleted', specificationAssetDestroyed)
        }).catch(error => {
            response(res, false, 'cannot delete specification asset', error)
        })
    }).catch(error => {
        response(res, false, 'specification asset not found', error)
    })
}