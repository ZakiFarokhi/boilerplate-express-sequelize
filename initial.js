const db = require('./app/config/db.config.js');
const Permission = db.permission
const Role = db.role

const initial = () =>{
    const Actions = ['CREATE', 'READ', 'UPDATE', 'DELETE']
    const Models = ['ROLE', 'PERMISSION','USER']
    for (let i = 0; i < Models.length; ) {
        var modelValue = Models[i];
        // console.log(modelValue)
        for (let j = 0; j < Actions.length; j++) {
            var actionValue = Actions[j];
            // console.log(actionValue)
            Permission.create({
                table : modelValue.toUpperCase(),
                action : actionValue
            }) 
        }
        i++
    }
    Role.create({
        name: 'Super Admin',
        description: 'this role can operate all action table in database'
    }).then(role => {
        Permission.findAll()
            .then(permission=>{
                role.setPermissions(permission)
                    .then(() => {
                        console.log('auto input actions for super admin')
                    })
            })
    })
}

exports.initial = initial