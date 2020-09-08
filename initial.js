const db = require('./app/db/db.config');
const Permission = db.permission
const Asset = db.asset
const Role = db.role

const initial = () => {
    db.sequelize.query('SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES ').then(
        response => {
            try {
                const result = response[0];
                let Models = [];
                const Actions = ['create', 'read', 'update', 'delete']
                result.map(hasil => {
                    Models.push(hasil.TABLE_NAME)
                })
                for (let i = 0; i < Models.length;) {
                    var modelValue = Models[i];
                    for (let j = 0; j < Actions.length; j++) {
                        var actionValue = Actions[j];
                        Permission.create({
                            table: modelValue,
                            action: actionValue
                        })
                    }
                    i++
                }
            } catch (err) {
                console.log(err)
            }

        }
    )
    try {
        Role.create({
            name: 'Super Admin',
            description: 'this role can operate all action table in database'
        }).then(role => {
            Permission.findAll()
                .then(permission => {
                    console.log(permission)
                    role.setPermissions(permission)
                        .then(result => {
                            console.log(result)
                            console.log('auto input actions for super admin')
                        })
                })
            Asset.findAll()
                .then(asset => {
                    role.setAssets(asset)
                        .then(result => {
                            console.log('auto input all asset')
                        })
                })
        })
    } catch{
        console.error()
    }

}

exports.initial = initial