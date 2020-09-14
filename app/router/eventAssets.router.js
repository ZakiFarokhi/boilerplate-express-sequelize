const response = require('../middleware/response/responseHandling')
const multer = require('multer')
module.exports = function (app) {
    const controller = require('../controller/eventAsset.controller')
    var date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            cb(null, `D:/data/ITAsset/v3/backend/backend/assets/upload/${req.params.event}`)
        },
        filename: function (req, file, cb) {
            cb(null, `${req.params.asset}-${date.getDate()}${monthNames[date.getMonth()]}${date.getFullYear()}_${date.getHours()}${(date.getMinutes()<10?'0':'') + date.getMinutes()}.png`)
        }
    })
    var upload = multer({ storage: storage })

    app.post('/eventAssets/upload/:event/:asset', upload.single('photo'), (req, res, next) => {
        return response(res, true, 'uploaded', req.file.path)
    })

    app.get('/eventAssets/read/', controller.readAllData)

    app.get('/eventAssets/read/:param', controller.readData)

    app.post('/eventAssets/create/', controller.createData)

    app.patch('/eventAssets/update/:param', controller.updateData)

    app.delete('/eventAssets/delete/:param', controller.deleteData)


}