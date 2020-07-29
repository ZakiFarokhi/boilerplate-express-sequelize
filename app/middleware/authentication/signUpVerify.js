const db = require('../../config/db.config')
const User = db.user;
const Response = require('../response/responseHandling')

exports.checkUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            username : req.body.username
        }
    }).then(user => {
        (user)? Response(res, false, 'username is already taken', null): 
        User.findOne({
            where: {
                email : req.body.email
            }
        }).then(user => {
            (user)? Response(res, false, 'email is already taken', null):
            User.count().then(count => {
                if(count.count <= 0){
                    next()
                    req.isTrue = true
                    req.roleId = 1
                }
                next()
            }).catch(err => {
                Response(res, false, 'table Users not exists', err)
            })
        })
    })    
}