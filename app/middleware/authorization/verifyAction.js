const db = require('../../db/db.config');
const Role = db.role;
const Permission = db.permission
const response = require('../response/responseHandling')

exports.verifyTableAccess = (req, res, next) => {
    console.log(req.params.table);
    console.log(req.params.action);
    console.log(res.locals.roleId);
    // (res.locals.roleId != '1')?
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
        console.log('ini permission', permission)
        res.locals.table = permission.table;
        console.log(res.locals.table, permission.table)
        res.locals.action = permission.action;
        console.log(res.locals.action, permission.action)
        next()

        // return //{ table: res.locals.table, action: res.locals.action }
        //response(res, true, 'access to table and action', permission)
    }).catch(err => {
        response(res, false, 'access denied', err)
    })
    // : next()
}

exports.bridgesRoute = (req, res, next) => {

    const tableParams = req.params.table;
    const actionParams = req.params.action;
    console.log(tableParams, actionParams, req.params.param)
    if (req.params.param) {
        const Params = req.params.param;
        console.log('with params')
        res.redirect(307, `/${tableParams}/${actionParams}/${Params}/`)
        res.json({success:true})
    }else{
        console.log('no params provided')
        res.redirect(307, `/${tableParams}/${actionParams}/`)
        res.json({success:true})
    }
}




