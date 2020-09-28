const db = require('../db/db.config')
const Data = db.employee
const response = require('../middleware/response/responseHandling')

exports.createData = (req, res) => {
    Data.create({
        IdEmployee: req.body.IdEmployee,
        name: req.body.name,
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        isActive: req.body.isActive,
        site: req.body.site,
        location: req.body.location,
        department: req.body.department,
        status: req.body.status
    }).then(result => {
        response(res, true, 'category asset created', result)
    }).catch(error => {
        response(res, false, 'cannot create category asset', error)
    })
}
exports.readAllData = (req, res) => {
    console.log('retrieve all')
    Data.findAll({
        include: [{ all: true, nested: false }]
    }).then(result => {
        response(res, true, 'category asset retrieve', result)
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.readData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.findOne({
        where: params,
        include: [{ all: true, nested: false }]
    }).then(result => {
        response(res, true, 'category asset retrieve', result)
    }).catch(error => {
        response(res, false, 'cannot read category asset', error)
    })
}
exports.updateData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.update({
        IdEmployee: req.body.IdEmployee,
        name: req.body.name,
        title: req.body.title,
        phone: req.body.phone,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        isActive: req.body.isActive,
        site: req.body.site,
        location: req.body.location,
        department: req.body.department,
        status: req.body.status
    }).then(result => {
        response(res, true, 'category asset updated', result)
    }).catch(error => {
        response(res, false, 'category asset not updated', error)
    })

}
exports.deleteData = (req, res) => {
    const params = JSON.parse(req.params.param)
    console.log(params)
    Data.destroy({where:params}).then(result => {
        response(res, true, 'category asset deleted', result)
    }).catch(error => {
        response(res, false, 'cannot delete category asset', error)
    })

}