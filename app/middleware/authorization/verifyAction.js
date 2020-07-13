const db = require('../../config/db.config');
const Role = db.role;
const Permission = db.permission

exports.tableActionAccessCheck = (req, res, next) => {
    Permission.findOne({
        where : {
            table : req.params.table,
            action : req.params.action
        },
        attributes:['permission_id', 'table', 'action'],
        include: [{
            model: Role,
            where:{
                role_id : req.params.roleId
            },
            attributes: ['role_id'],
            through: {
                attributes: ['permission_id', 'role_id']
            }
        }]
    }).then(() => {
        res.status(200).json({
            'message': 'success'
        })
        next()
    }).catch(error => {
        res.status(500).json({
            'message': 'failed',
            'data': error
        })
    })
}



