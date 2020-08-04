const db = require('../../config/db.config');
const Role = db.role;
const Permission = db.permission
const response = require('../response/responseHandling')
exports.verifyTableAccess = (req, res, next) => {
    console.log(req.params.table)
    console.log(req.params.action)
    console.log(res.locals.roleId)
    Permission.findOne({
        where: {
            table: req.params.table, //table
            action: req.params.action //action
        }, attributes: ['id', 'table', 'action'],
        include: [{
            model: Role,
            where: {
                id: res.locals.roleId //roleId
            },
            attributes: ['id'],
            through: {
                attributes: ['permission_id', 'role_id']
            }
        }]
    }).then(permission => {
        console.log(permission)
        res.locals.table = permission.table;
        res.locals.action = permission.action;
        next()
        return { table: res.locals.table, action: res.locals.action }
        //response(res, true, 'access to table and action', permission)
    }).catch(err => {
        console.log(err)
        response(res, false, 'access denied', err)
    })
}

exports.bridgesRoute = (req, res, next) => {

    const tableParams = res.locals.table;
    const actionParams = res.locals.action;
    console.log(tableParams, actionParams)
    if (req.params.id) {
        const idParams = req.params.id;
        res.redirect(307, `/${tableParams}/${actionParams}/${idParams}/`)
    }else{
        res.redirect(307, `/${tableParams}/${actionParams}/`)
    }
}




