const db = require('../config/db.config')
const CategoryAsset = db.categoryAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')
const SpecificationAsset = db.specificationAsset;
const SpecificationAssetValue = db.specificationAssetValue
const User = db.user
exports.createCategoryAsset = (req, res) => {
    CategoryAsset.create({
        name : req.body.name,
        description: req.body.description
    }).then(categoryAsset => {
        response(res, true, 'category asset created', categoryAsset)
    }).catch(error => {
        response(res, false, 'cannot create category asset', error)
    })
}
exports.readAllCategoryAsset = (req, res) => {
    CategoryAsset.findAll({
        include: { all: true, nested: true }
        // include: [{
        //     model: SpecificationAsset,
        //     through: {
        //       attributes: [specificationAsset_id, categoryAsset_id]
        //     }
        //   }]
    }).then(categoryAsset => {
        response(res, true, 'category asset retrieve', categoryAsset) 
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.readCategoryAsset = (req, res) => {
    CategoryAsset.findOne({
        where : {
            id : req.params.id
        },
        include: { all: true, nested: true }
    }).then(categoryAsset => {
        response(res, true, 'category asset retrieve', categoryAsset) 
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.updateCategoryAsset = (req, res) => {
    CategoryAsset.findOne({
        where : {
            id : req.params.id
        }
    }).then(categoryAsset => {
        categoryAsset.update({
            name : req.body.name,
            description : req.body.description
        }).then(categoryAssetUpdate => {
            response(res, true, 'category asset updated', categoryAssetUpdate)
        }).catch(error => {
           response(res, false, 'category asset not updated', error)
        })
    })
}
exports.deleteCategoryAsset = (req, res) => {
    CategoryAsset.findOne({
        where : {
            id : req.params.id
        }
    }).then(categoryAsset => {
        categoryAsset.destroy().then(categoryAssetDestroyed => {
            response(res, true, 'category asset deleted', categoryAssetDestroyed)
        }).catch(error => {
            response(res, false, 'cannot delete category asset', error)
        })
    }).catch(error => {
        response(res, false, 'category asset not found', error)
    })
}