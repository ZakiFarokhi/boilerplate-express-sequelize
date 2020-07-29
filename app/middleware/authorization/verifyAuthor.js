const db = require('../../config/db.config');
const Permission = db.permission

exports.verifyAuthor = (req, res, next) => {
    Permission.findOne({
        where: {
            id : req.params.rscId //resourceId
        }
    }).then(permission => {
        if(permission.id == req.UserId){
            Response(res, true, 'access to table and action', permission)
            next()
        }
    }).catch(err => {
        Response(res, false, 'access denied, restriction area', err)
    })
}
