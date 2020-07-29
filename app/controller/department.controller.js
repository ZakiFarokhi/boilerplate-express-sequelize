const db = require('../config/db.config')
const Department = db.department;
const response = require('../middleware/response/responseHandling')

exports.readAllDepartment = (req, res) => {
    Department.findAll({

    }).then(result => {
        response(res, true, 'all department retrieved', result)
    }).catch(err => {
        response(res, false, 'cannot retrieve all department', err)
    })
}
exports.createDepartment = (req, res) => {
    Department.create({
        name : req.body.name,
        description : req.body.description,
        createdBy : req.body.createdBy
    }).then(result => {
        response(res, true, 'department created', result)
    }).catch(err => {
        response(res, false, 'cannot create department', err)
    })
}
