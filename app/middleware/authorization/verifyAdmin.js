const db = require('../../db/db.config')
const User = db.user
const Role = db.role
const Response = require('../response/responseHandling')

exports.verifyAdmin = (req, res, next) => {
    User.findOne({
        where: {
            id : req.UserId
        }
    }).then(user => {
        if(user.roleId != 1 ){
            Response(res, false, 'restriction zone', null)
        }
        req.IsSuperAdmin = true;
        next()
    })
}