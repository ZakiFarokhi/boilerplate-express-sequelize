const db = require('./app/config/db.config.js');
const Permission = db.permission
const Role = db.role

const initial = () => {
    const Actions = ['CREATE', 'READ', 'UPDATE', 'DELETE']
    const Models = ['USER', 'ROLE', 'PERMISSION', 'MASTEREMPLOYEE',
        'STATUSEMPLOYEE', 'CATEGORYASSET', 'SPECIFICATIONASSET',
        'SPECIFICATIONASSETVALUE', 'MASTERASSET', 'SITE',
        'LOCATION', 'DEPARTMENT', 'STATUSASSET', 'STATUSASSETFIELD',
        'STATUSASSETVALUE', 'LOGASSET','LOGUSER','LOGEMPLOYEE']
    for (let i = 0; i < Models.length;) {
        var modelValue = Models[i];
        for (let j = 0; j < Actions.length; j++) {
            var actionValue = Actions[j];
            Permission.create({
                table: modelValue.toUpperCase(),
                action: actionValue
            })
        }
        i++
    }
    try{
        db.site.create({
            name : 'Pusat',
            address : 'Jakarta Barat',
            city : 'Jakarta Barat',
            province: 'DKI Jakarta',
            zip: '123456',
            country: 'Indonesia',
            createdBy: '1'
        })
        db.location.create({
            id : '1',
            name:'DKI BEKASI 2',
            description: 'Depo Bekasi 2',
            createdBy: '1',
            siteId : '1'
        })
        db.location.create({
            id : '2',
            name:'DKI SELATAN 2',
            description: 'Depo Selatab 2',
            createdBy: '1',
            siteId : '1'
        })
        db.location.create({
            id : '3',
            name:'DKI TIMUR 2',
            description: 'Depo Timur 2',
            createdBy: '1',
            siteId : '1'
        })
        db.location.create({
            id : '4',
            name:'DKI UTARA 2',
            description: 'Depo Utara 2',
            createdBy: '1',
            siteId : '1'
        })
        db.categoryAsset.create({
            name : 'Laptop',
            description : 'Laptop atau Notebook',
            createdBy : '1'
        })
        db.categoryAsset.create({
            name : 'PC',
            description : 'Personal Computer',
            createdBy : '1'
        })
        db.categoryAsset.create({
            name : 'Monitor',
            description : 'Monitor untuk desktop',
            createdBy : '1'
        })
        db.specificationAsset.create({
            name: 'Processor',
            dataType: 'DropDown',
            isRequired: 'true',
            createdBy: '1'
        })
        db.specificationAsset.create({
            name: 'HardDisk',
            dataType: 'DropDown',
            isRequired: 'true',
            createdBy: '1'
        })
        db.specificationAsset.create({
            name: 'RAM',
            dataType: 'DropDown',
            isRequired: '',
            createdBy: '1'
        })
        db.specificationAsset.create({
            name: 'Audio',
            dataType: 'DropDown',
            isRequired: 'true',
            createdBy: '1'
        })
        db.specificationAsset.create({
            name: 'Layar',
            dataType: 'DropDown',
            isRequired: '',
            createdBy: '1'
        })
        Role.create({
            name: 'Super Admin',
            description: 'this role can operate all action table in database'
        }).then(role => {
            Permission.findAll()
                .then(permission => {
                    role.setPermissions(permission)
                        .then(() => {
                            console.log('auto input actions for super admin')
                        })
                })
        })
       
    }catch{console.error()
    }
    
}

exports.initial = initial