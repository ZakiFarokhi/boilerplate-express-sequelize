var express = require('express')
var app = express();
var bodyParser = require('body-parser')
require('dotenv').config()
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
var initial = require('./initial')
//connect configure database

const db = require('./app/db/db.config')

var server = app.listen(2020, function () {
  var host = server.address().address
  var port = server.address().address
  console.log("App listening at http://%s:%s", host, port)
})

app.get('/', function (req, res, next) {
  res.json({
    'success': true
  })
})

const dropSync = true
db.sequelize.sync({ alter:{drop: true} }).then(() => {
  console.log('Drop and Resync with { force: ' + dropSync + ' }');
  dropSync ? initial.initial() : console.log('finish without drop and sync table')
  console.log('finish');
  // db.sequelize.showAllSchemas({}).then(schema => console.log(schema))

});

app.get('/test',
  function (req, res, next) {
    req.custom = true;
    req.myObject = { hello: 1 };
    next();
  }
)

require('./app/router/assets.router')(app)
require('./app/router/middleware.router')(app)
require('./app/router/user.router')(app);
require('./app/router/role.router')(app);
require('./app/router/category.router')(app)
require('./app/router/brand.router')(app)
require('./app/router/department.router')(app)
require('./app/router/location.router')(app)
require('./app/router/model.router')(app)
require('./app/router/purchase.router')(app)
require('./app/router/site.router')(app)
require('./app/router/specification.router')(app)
require('./app/router/status.router')(app)
require('./app/router/ownership.router')(app)
require('./app/router/ownershipArea.router')(app)
require('./app/router/specificationValue.router')(app)
require('./app/router/employee.router')(app)
require('./app/router/instance.router')(app)
require('./app/router/company.router')(app)
require('./app/router/region.router')(app)
require('./app/router/eventAssets.router')(app)




