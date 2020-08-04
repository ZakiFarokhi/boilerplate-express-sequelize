const db = require('../config/db.config')
const Employee = db.employee
const response = require('../middleware/response/responseHandling')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const Status = db.statusEmployee
const Site = db.site

exports.countEmployee = (req, res) => {
    const filterBy = req.params.filterBy
    var whereClause = {};
    (filterBy != 'all') ? (whereClause["where"] = { [filterBy]: req.body.filterValue }) : null;
    Employee.findAndCountAll(
        whereClause
    ).then(count => {
        response(res, true, 'employees counted', count.count)
    }).catch(err => {
        response(res, false, 'cannot count employees', err)
    })
}
exports.signin = (req, res) => {
    Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(employee => {
        if (!employee) {
            return response(res, false, 'cannot found employee with email', req.body.email);
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, employee.password);
        if (!passwordIsValid) {
            //return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
            return response(res, false, 'password invalid', { auth: false, accessToken: null, reason: "Invalid Password!" })
        }
        var token = jwt.sign({ id: employee.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.json({ 'success': true, 'data': { 'token': token, 'employeeId': employee.id } });
        console.log(token, employee.id)
    }).catch(err => {
        console.log(err)

    });
}
exports.readAllEmployee = (req, res) => {
    Employee.findAll({
        include:[
            {model:Status },
            {model:Site }
        ]
    }).then(result => {
        response(res, true, 'all employee retrieved', result)
    }).catch(err=> {
        response(res, false, 'cannot retrieved all employee', err)
    }) 
}

exports.createEmployee = (req, res) => {
    Employee.create({
        name: req.body.name,
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        isActive: req.body.isActive,
        siteId: req.body.siteId,
        statusEmployeeId: req.body.statusEmployeeId
    }).then(employee => {
        response(res, true, 'employee created', employee)
    }).catch(err => {
        response(res, false, 'employee not created', err)
    })
}