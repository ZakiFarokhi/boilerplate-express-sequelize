const db = require('../../db/db.config')
const Sequelize = require('sequelize')
const User = db.user;
const response = require('../response/responseHandling')
const Op = Sequelize.Op

exports.checkUsernameOrEmail = (req, res, next) => {
    User.findOne({
        where: {
            [Op.or]: [
                { name: req.body.name }, { email: req.body.email }
            ]
        }
    }).then(user => {
        (user) ? response(res, false, 'name or email is already taken', null) : next()
    }).catch(err => {
        response(res, false, 'table Users not exists', err)
    })
}