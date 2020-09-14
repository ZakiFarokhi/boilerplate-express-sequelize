const multer = require('multer')
const response = require('../middleware/response/responseHandling')
module.exports = function(app) {
    const controller = require('../controller/purchase.controller')

    var date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, `D:/data/ITAsset/v3/backend/backend/purchase/upload/`)
        },
        filename: function (req, file, cb) {
            cb(null, `${req.params.number}-${date.getDate()}${monthNames[date.getMonth()]}${date.getFullYear()}_${date.getHours()}${(date.getMinutes()<10?'0':'') + date.getMinutes()}.png`)
        }
    })
    var upload = multer({ storage: storage })

    app.post('/purchase/upload/:number', upload.single('photo'), (req, res, next) => {
        return response(res, true, 'uploaded', req.file.path)
    })

    app.get('/purchases/read/', controller.readAllData)

    app.get('/purchases/read/:param', controller.readData)

    app.post('/purchases/create/', controller.createData)

    app.patch('/purchases/update/:param', controller.updateData)

    app.delete('/purchases/delete/:param', controller.deleteData)

}