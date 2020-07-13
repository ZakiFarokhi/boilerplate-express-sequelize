const db = require('../../config/db.config');
const User = db.user;

checkDuplicateUserNameOrEmail = (req, res, next) => {
	// -> Check Username is already in use
	User.findOne({
		where: {
			username: req.body.username
		} 
	}).then(user => {
		if(user){
			res.status(400).send("Fail -> Username is already taken!");
			return;
		}
		
		// -> Check Email is already in use
		User.findOne({ 
			where: {
				email: req.body.email
			} 
		}).then(user => {
			if(user){
				res.status(400).send("Fail -> Email is already in use!");
				return;
			}
			User.count().then(count => {
				if(count.count <= 0){
					next()
					res.locals.isTrue = true
					res.locals.roleId = 1
				}
				next();
			}).catch(error => {
				res.status(500).json({
					"error": error
				})
			})
			
		});
	});
}
const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;
module.exports = signUpVerify;