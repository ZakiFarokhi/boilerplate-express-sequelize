const db = require('../config/db.config')
const Role = db.role

exports.createRole = (req, res) => {
    Role.create({
        name : req.body.name,
        description: req.body.description
    }).then(role => {
        res.status(200).json({
            "message" : "role created",
            "data" : role
        })
    }).catch(error => {
        res.status(500).json({
            "message" : "failed to create role",
            "data" : role
        })
    })
}
exports.readAllRole = (req, res) => {
    Role.findAll().then(role => { 
        res.status(200).json({
            "message" : "role retrieve",
            "data" : role
        })
    }).catch(error => {
        res.status(500).json({
            "message" : "role not retrieve",
            "data" : role
        })
    })
}
exports.readRole = (req, res) => {
    Role.findOne({
        where : {
            role_id : req.params.roleId
        }
    }).then(role => {
        res.status(200).json({
            "message" : "role retrieved",
            "data" : role
        })
    }).catch(error => {
        res.status(500).json({
            "message" : "role not retrieved",
            "data" : role
        })
    })
}
exports.updateRole = (req, res) => {
    Role.findOne({
        where : {
            role_id : req.params.userId
        }
    }).then(role => {
        role.update({
            name : req.body.name,
            description : req.body.description
        }).then(roleUpdated => {
            res.status(200).json({
                "message" : "role updated",
                "data" : roleUpdated
            })
        }).catch(error => {
            res.status(500).json({
                "message" : "role not update",
                "data" : error
            })
        })
    })
}
exports.deleteRole = (req, res) => {
    Role.findOne({
        where : {
            role_id : req.params.roleId
        }
    }).then(role => {
        role.destroy().then(roleDestroyed => {
            res.status(200).json({
                "message" : "role deleted",
                "data" : roleDestroyed
            })
        }).catch(error => {
            res.status(500).json({
                "message": "cannot delete role",
                "data" : error
            })
        })
    }).catch(error => {
        res.status(500).json({
            "message" : "role not Found",
            "data" : error
        })
    })
}