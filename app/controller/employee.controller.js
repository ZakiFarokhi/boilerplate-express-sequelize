const db = require('../config/db.config')
const Employee = db.employee
const response = require('../middleware/response/responseHandling')

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
exports.readAllEmployee = (req, res) => {
    Employee.findAll({

    }).then(result => {
        response(res, true, 'all employee retrieved', result)
    }).catch(err=> {
        response(res, false, 'cannot retrieved all employee', err)
    }) 
}