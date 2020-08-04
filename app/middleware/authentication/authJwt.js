const jwt = require('jsonwebtoken');
const config = require('../../config/config')
const response = require('../response/responseHandling')
const db = require('../../config/db.config')
const User = db.user;

const authJwt = async (req, res, next) => {
    const token = await req.headers['x-access-token']
    // console.log(req.headers['x-access-token'])
        await (!token) ? response(res, false, 'No token provided', { data: 'data' }) :
        jwt.verify(token, config.secret, (err, decoded) => {
            (err) ? response(res, false, 'fail to Authenticattion Error', err) :
                findUser(decoded)
        })

    function findUser(decoded) {
        console.log(decoded)
        User.findOne({
            where: {
                id: decoded.id
            }
        }).then(userData => {
            if (userData) {
                // console.log(decoded.role, decoded.id)
                res.locals.userId = decoded.id;
                res.locals.roleId = decoded.role;
                console.log(res.locals.userId, res.locals.roleId)
                next();
            } else {
                response(res, false, "please login to your account or sign up if you have none");
            }
        })
            .catch(err => response(res, false, "something went wrong, no data retrieved", err));
    }
}
module.exports = authJwt;
