const db = require('../config/db.config')
const config = require('../config/config')
const MasterAsset = db.masterAsset
const Op = db.Sequelize.Op
const response = require('../middleware/response/responseHandling')
const User = db.user;
const Site = db.site;
const Status = db.statusAsset;
const Employee = db.employee;
const Location = db.location;
const Category  = db.categoryAsset

exports.countAsset = (req, res) => {
    const filterBy = req.params.filterBy
    var whereClause = {};
    (filterBy != 'all') ? (whereClause["where"] = { [filterBy]: req.body.filterValue }) : null;
    MasterAsset.findAndCountAll(
        whereClause
    ).then(count => {
        response(res, true, 'assets count', count.count)
    }).catch(err => {
        response(res, false, 'cannot count', err)
    })
}

exports.readAsset = async (req, res) => {
   try{
        const {id} = req.params;
        const asset = await MasterAsset.findOne({
            where: {
                id
            },
            include : [
                {model: User, attributes:['id', 'name']},
                {model: Site, include:[
                    {model:Location }
                ] },
                {model: Employee},
                {model: Status, attributes: ['id', 'name']},
                {model: Category, attributes: ['id', 'name']}
            ]
        })
        response(res, true, 'asset retrieve', asset)
   }catch(err){
       response(res, false, 'cannot retrieve asset', err)
   }
}
exports.readAssets = (req, res) => {
    console.log('we try to retrieve all asset')
    MasterAsset.findAll().then(assets => {
        response(res, true, 'All Asset Retrieved', assets)
    }).catch(err => {
        console.log(err)
        response(res, false, 'cannot retrieve table Asset', err)
    })
}
exports.createAsset = async (req, res) => {
    try {
        const asset = MasterAsset.create({
            tag_id : req.body.tag_id,
            description : req.body.description,
            purchase_date : req.body.purchase_date,
            purchase_from : req.ody.purchase_from,
            purchase_cost : req.body.purchase_cost,
            brand : req.body.brand,
            model : req.body.model,
            serial_no : req.body.serial_no,
            siteId : req.body.siteId,
            categoryAssetId :req.body.categoryAssetId,
            locationId : req.body.locationId,
            departmentId : req.body.departmentId,
            lastOpname : req.body.lastOpname,
            createdBy : req.body.createdBy
        })
        response(res, true, 'Asset Create',{[fieldName]: newInfo})
        console.log(asset)
    }catch (err){
        response(res, false, 'cannot create Asset', err)
    } 
}
exports.updateAsset = async (req, res) => {
    try {
        const  { tag_id ,description ,purcase_date ,purchase_from,purchase_cost ,brand
            ,model ,serial_no ,siteId ,locationId ,departmentId ,statusAssetId
            ,lastOpname,createdBy,categoryAssetId } = req.body
        await MasterAsset.update(
            { tag_id ,description ,purcase_date ,purchase_from,purchase_cost ,brand
                ,model ,serial_no ,siteId ,locationId ,departmentId ,statusAssetId
                ,lastOpname,createdBy,categoryAssetId }
        )
        response(res, true, 'Asset Create',{[fieldName]: newInfo})
    }catch (err){
        response(res, false, 'cannot create Asset', err)
    }
}
