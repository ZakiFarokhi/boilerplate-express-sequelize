const db = require('../config/db.config')
const config = require('../config/config');
const User = db.user
const Role = db.role

const Op = db.Sequelize.Op
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

exports.createUser = (req, res) => { //create User or signup
    //console.log("we trye to create User")
    var role = res.locals.myObject == 0 ? '0' : null
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10),
        startDate : null,
        endDate : null,
        role_id: null
    }).then(user => {
        res.status(200).json({
            "message" : "user created",
            "data" : user
        })
    }).catch(error => {
        res.status(500).json({
            "message": "cannot create user",
            "data" : error
        })
    })
}
exports.createSuperAdmin = (req, res) => {
    var isSuperAdmin = Boolean
    User.count().then( userCount => {
        
        userCount == 0 ? isSuperAdmin = true : isSuperAdmin = false;
        if(isSuperAdmin){
            User.create({
                name : req.body.name,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password, 10),
                startDate : null,
                endDate : null
            }).then(user => {

                return Role.findOne({
                    where: {
                        role_id: '1'
                    }
                }).then(role => {
                    user.setRole(role);
                    res.status(200).json({
                        "message" : "user created",
                        "data" : user
                    })
                })
            }).catch(error => {
                res.status(500).json({
                    "message": "cannot create user",
                    "data" : error
                })
            })
        }
    }).catch(error => {
        res.status(500).json({
            "message": "cannot create user",
            "data" : error
        })
    })
}

exports.signin = (req, res) => {
	console.log("Sign-In");
	
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		var token = jwt.sign({ id: user.user_id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		
		res.status(200).send({ auth: true, accessToken: token });
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}

exports.readUsers = (req, res) => { //read All User
    console.log("we try to read all User")
    User.findAll().then(user =>{
        res.status(200).json({
            "message": "user retrieve",
            "data": user
        })
    }).catch(error =>{
        res.status(500).json({
            "message":"data not retrieve",
            "data": error
        })
    })
}
exports.readUser = (req, res) => { //read one data of user
    console.log("we try to read specific User")
    User.findOne({
        where :{
            user_id : req.params.userId
            // [Op.or] : [
            //     { id : req.body.id 
            //     },
            //     { name : req.body.name 
            //     },
            //     { email : req.body.email 
            //     }
            // ]
        }
    }).then(user => {
        res.status(200).json({
            "message" : "user read",
            "data" : user
        })
    }).catch(error => {
        res.status(500).json({
            "message": "cannot read user",
            "data" : error
        })
    })
}
exports.updateUser = (req, res) => { //update user
    console.log("we try to update a specific user")
    User.findOne({
        where : {
            user_id : req.params.userId
        }
    }).then(user => {
        console.log("user found")
        user.update({
            name : req.body.name,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
        }).then(user => {
            res.status(200).json({
                "message" : "user created",
                "data" : user
            })
        }).catch(error => {
            res.status(500).json({
                "message": "cannot create user",
                "data" : error
            })
        })
    }).catch(error => {
        res.status(500).json({
            "message": "cannot read user",
            "data": error
        })
    })
}
exports.deleteUser = (req, res) => {
    console.log("we try to delete a specific user")
    User.findOne({
        where : {
            user_id : req.params.userId
        }
    }).then(user => {
        user.destroy().then(user => {
            res.status(200).json({
                "message" : "user deleted",
                "data" : user
            })
        }).catch(error => {
            res.status(500).json({
                "message": "cannot delete user",
                "data" : error
            })
        })
    }).catch(error => {
        res.status(500).json({
            "message" : "user not Found",
            "data" : error
        })
    })
}