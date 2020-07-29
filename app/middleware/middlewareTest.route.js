

module.exports = function(app) {
    const authJwt = require('../middleware/authentication/authJwt')
    const signUpVerify = require('../middleware/authentication/signUpVerify')
    const verifyAction = require('../middleware/authorization/verifyAction')
    const verifyAdmin = require('../middleware/authorization/verifyAdmin')
    const verifyAuthor = require('../middleware/authorization/verifyAuthor')

    app.post('/mid/authjwt/', authJwt)
    app.post('/mid/signUpVerify/', signUpVerify)
    app.post('/mid/verifyAction/', verifyAction)
    app.post('/mid/verifyAdmin/', verifyAdmin)
    app.post('mid/verifyAuthor/', verifyAuthor)
    
}