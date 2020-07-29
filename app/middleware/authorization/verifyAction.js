const db = require('../../config/db.config');
const Role = db.role;
const Permission = db.permission

exports.verifyTableAccess = (req, res, next) => {
    Permission.findOne({
        where:{
            table : req.params.tb, //table
            action : req.params.act //action
        }, attributes:['id', 'table', 'action'],
        include: [{
            model: Role,
            where: {
                id : req.headers['x-rid'] //roleId
            },
            attributes: ['id'],
            through : {
                attributes: ['permissionId', 'roleId']
            }
        }]
    }).then(permission => {
        Response(res, true, 'access to table and action', permission)
        next()
    }).catch(err => {
        Response(res, false, 'access denied', err)
    })
}




