const jwt = require('jsonwebtoken');
const db = require('../../config/db.config');
const Role = db.role;
const User = db.user;
const Permission = db.permission

verifyToken = (req, res, next) => {
	let token = req.headers['x-access-token'];
  
	if (!token){
		return res.status(403).send({ 
			auth: false, message: 'No token provided.' 
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err){
			return res.status(500).send({ 
					auth: false, 
					message: 'Fail to Authentication. Error -> ' + err 
				});
		}
		req.userId = decoded.id;
		next();
	});
}
exampleTableAccess = (req, res, next) => {
	Permission.findOne({
        where : {
            table : 'user',
			action : 'delete',
        },
        attributes:['permission_id', 'table', 'action'],
        include: [{
			model: Role,
			where :{
				role_id : '1'
			},
            attributes: ['role_id'],
            through: {
                attributes: ['permission_id', 'role_id']
            }
        }]
    }).then(result => {
		User.findAndCountAll().then(hasil =>{
			
			if(hasil.count <= 0 ){
				res.status(200).json({
					'message': 'success',
					'data': hasil.count
				})	
			}
		})
        
		var jsonData = JSON.stringify(result.roles[0].role_id)
		console.log(User.count())
		// for (let index = 0; index < jsonData.roles.length; index++) {
		// 	const element = jsonData.roles[index];
		// 	console.log(element)
		// }
    })
}
const authJwt = {};
authJwt.verifyToken = verifyToken;
authJwt.checkAction = exampleTableAccess;

module.exports = authJwt;