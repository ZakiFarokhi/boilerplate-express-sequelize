const db = require('../config/db.config')
const config = require('../config/config'); //jwtsecret
const User = db.user
const Role = db.role
const Op = db.Sequelize.Op
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const response = require('../middleware/response/responseHandling')
const Permission = db.permission

exports.countUser = (req, res) => {
    const filterBy = req.params.filterBy
    var whereClause = {};
    (filterBy != 'all') ? (whereClause["where"] = { [filterBy]: req.body.filterValue }) : null;
    User.findAndCountAll(
        whereClause
    ).then(count => {
        response(res, true, 'user count', count.count)
        console.log(count.count)
    }).catch(err => {
        response(res, false, 'cannot count user', err)
    })
}
exports.createUserByAdmin = (req, res) => {
    console.log(req.body)

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        roleId: req.body.roleId
    }).then(user => {
        console.log(user)
        response(res, true, 'user created', user)
    }).catch(err => {
        console.log(err)
        response(res, false, 'cannot create user', err)
    })
}
exports.createUser = (req, res) => {
    Role.findOne({
        attributes: ['id', 'name'],
        where: {
            id: 1
        }
    }).then(role => {
        console.log(role)

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            startDate: null,
            endDate: null,
            roleId: role.id
        }).then(user => {
            response(res, true, 'admin created', { user, role })
        }).catch(err => {
            response(res, false, 'cannot create user', err)
        })
    }).catch(error => {
        response(res, false, 'cannot found super admin', error)
    })
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return response(res, false, 'cannot found user with email', req.body.email);
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            //return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
            return response(res, false, 'password invalid', { auth: false, accessToken: null, reason: "Invalid Password!" })
        }
        var token = jwt.sign({ id: user.id, role: user.roleId }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.json({ 'success': true, 'data': { 'token': token, 'userId': user.id } });
        console.log(token, user.id, user.roleId)
    }).catch(err => {
        console.log(err)

    });
}

exports.readUsers = (req, res,) => { //read All User
    User.findAll({
        include: [
            { model: Role }
        ]
    }).then(user => {
        response(res, true, 'users retrieved', user)
    }).catch(error => {
        response(res, false, 'users cannot retrieved', error)
    })
}
exports.readUser = (req, res) => { //read one data of user
    console.log("we try to read specific User")
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Role, attributes: ['id', 'name'], include: [
                    { model: Permission }
                ]
            },
        ]
    }).then(user => {
        response(res, true, 'user retrieved', user)
    }).catch(error => {
        response(res, false, 'user cannot retrieved', error)
        console.log(error)
    })
}
exports.updateUser = (req, res) => { //update user
    console.log("we try to update a specific user")
    User.findOne({
        where: {
            id: req.params.userId
        }
    }).then(user => {
        console.log("user found")
        user.update({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }).then(user => {
            response(res, true, 'user updated', user)
        }).catch(error => {
            response(res, false, 'cannot update user', error)
        })
    }).catch(error => {
        response(res, false, 'user not found', error)
    })
}
exports.deleteUser = (req, res) => {
    console.log("we try to delete a specific user")
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        user.destroy().then(userDeleted => {
            response(res, true, 'user deleted', userDeleted)
        }).catch(error => {
            response(res, false, 'cannot delete user', error)
        })
    }).catch(error => {
        response(res, false, 'user not found', error)
    })
}