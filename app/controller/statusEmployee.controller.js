const db = require('../config/db.config')
const StatusEmployee = db.statusEmployee
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')
const User = db.user
exports.createStatusEmployee = (req, res) => {
    StatusEmployee.create({
        name : req.body.name,
        description: req.body.description
    }).then(StatusEmployee => {
        response(res, true, 'category employee created', StatusEmployee)
    }).catch(error => {
        response(res, false, 'cannot create category employee', error)
    })
}
exports.readAllStatusEmployee = (req, res) => {
    StatusEmployee.findAll({
        
    }).then(statusEmployee => {
        response(res, true, 'category employee retrieve', statusEmployee) 
    }).catch(error => {
        response(res, false, 'cannot read category employee', error)
    })
}
exports.readStatusEmployee = (req, res) => {
    StatusEmployee.findOne({
        where : {
            id : req.params.id
        }
    }).then(statusEmployee => {
        response(res, true, 'category employee retrieve', statusEmployee) 
    }).catch(error => {
        response(res, false, 'cannot read category employee', error)
    })
}
exports.updateStatusEmployee = (req, res) => {
    StatusEmployee.findOne({
        where : {
            id : req.params.id
        }
    }).then(StatusEmployee => {
        StatusEmployee.update({
            name : req.body.name,
            description : req.body.description
        }).then(StatusEmployeeUpdate => {
            response(res, true, 'Status employee updated', StatusEmployeeUpdate)
        }).catch(error => {
           response(res, false, 'Status employee not updated', error)
        })
    })
}
exports.deleteStatusEmployee = (req, res) => {
    StatusEmployee.findOne({
        where : {
            id : req.params.id
        }
    }).then(StatusEmployee => {
        StatusEmployee.destroy().then(StatusEmployeeDestroyed => {
            response(res, true, 'Status employee deleted', StatusEmployeeDestroyed)
        }).catch(error => {
            response(res, false, 'cannot delete Status employee', error)
        })
    }).catch(error => {
        response(res, false, 'Status employee not found', error)
    })
}