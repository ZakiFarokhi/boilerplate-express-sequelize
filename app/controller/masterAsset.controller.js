const db = require('../config/db.config')
const config = require('../config/config')
const MasterAsset = db.masterAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')

exports.countAsset = (req, res) => {
    const filterBy = req.params.filterBy
    var whereClause={};
    (filterBy != 'all')? (whereClause["where"] = {[filterBy] :req.body.filterValue}) : null;
    MasterAsset.findAndCountAll(
        whereClause
    ).then(count => {
        response(res, true, 'assets count', count)
    }).catch(err => {
        response(res, false, 'cannot count', err)
    })
}
