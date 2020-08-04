const db = require('../config/db.config')
const StatusAsset = db.statusAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')
const User = db.user
exports.createStatusAsset = (req, res) => {
    StatusAsset.create({
        name : req.body.name,
        description: req.body.description
    }).then(StatusAsset => {
        response(res, true, 'category asset created', StatusAsset)
    }).catch(error => {
        response(res, false, 'cannot create category asset', error)
    })
}
exports.readAllStatusAsset = (req, res) => {
    StatusAsset.findAll({
        
    }).then(statusAsset => {
        response(res, true, 'category asset retrieve', statusAsset) 
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.readStatusAsset = (req, res) => {
    StatusAsset.findOne({
        where : {
            id : req.params.id
        }
    }).then(statusAsset => {
        response(res, true, 'category asset retrieve', statusAsset) 
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.updateStatusAsset = (req, res) => {
    StatusAsset.findOne({
        where : {
            id : req.params.id
        }
    }).then(StatusAsset => {
        StatusAsset.update({
            name : req.body.name,
            description : req.body.description
        }).then(StatusAssetUpdate => {
            response(res, true, 'Status asset updated', StatusAssetUpdate)
        }).catch(error => {
           response(res, false, 'Status asset not updated', error)
        })
    })
}
exports.deleteStatusAsset = (req, res) => {
    StatusAsset.findOne({
        where : {
            id : req.params.id
        }
    }).then(StatusAsset => {
        StatusAsset.destroy().then(StatusAssetDestroyed => {
            response(res, true, 'Status asset deleted', StatusAssetDestroyed)
        }).catch(error => {
            response(res, false, 'cannot delete Status asset', error)
        })
    }).catch(error => {
        response(res, false, 'Status asset not found', error)
    })
}