const db = require('../db/db.config')
const Role = db.role
const response = require('../middleware/response/responseHandling')

exports.createRole = (req, res) => {
    Role.create({
        name : req.body.name,
        description: req.body.description
    }).then(role => {
        response(res, true, 'role created', role)
    }).catch(error => {
        response(res, false, 'cannot create role', error)
    })
}
exports.readAllRole = (req, res) => {
    Role.findAll({
    }).then(role => { 
        response(res, true, 'all roles retrieved', role)
    }).catch(error => {
        response(res, false, 'cannot retrieve roles', error)
    })
}
exports.readRole = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Role.findOne({
        where : params
    }).then(role => {
        response(res, true, 'role retrieved', role)
    }).catch(error => {
        response(res, false, 'cannot retrieve role', error)
    })
}
exports.updateRole = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Role.findOne({
        where : params
    }).then(role => {
        role.update({
            name : req.body.name,
            description : req.body.description
        }).then(roleUpdated => {
            response(res, true, 'role updated', roleUpdated)
        }).catch(error => {
            response(res, false, 'cannot update role', error)
        })
    }).catch(error => {
        response(res, false, 'role not found', error)
    })
}
exports.deleteRole = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Role.findOne({
        where : params
    }).then(role => {
        role.destroy().then(roleDestroyed => {
            response(res, true, 'role deleted', roleDestroyed)
        }).catch(error => {
            response(res, fals, 'role cannot delete', error)
        })
    }).catch(error => {
        response(res, false, 'role not found', error)
    })
}

