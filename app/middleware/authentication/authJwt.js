const jwt = require('jsonwebtoken');
const config = require('../../config/config')
const Response = require('../response/responseHandling')

exports.authJwt = (req, res, next) => {
    let token = req.headers['x-access-token']

    (!token)? Response(res, false, 'No token provided', {data: 'data'}):

    jwt.verify(token, config.secret, (err, decoded) => {
        (err)? Response(res, false, 'fail to Authenticattion Error', err):
        req.UserId = decoded.id;
        Response(res, true, 'jwt accepted', {data: 'data'})
        //next();
    })
}
