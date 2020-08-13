var express = require('express')
var app = express();
var bodyParser = require('body-parser')
require('dotenv').config()
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
//connect configure database

const db = require('./app/db/db.config')

var server = app.listen(2020, function(){
    var host = server.address().address
    var port = server.address().address
    console.log("App listening at http://%s:%s", host, port)
})

app.get('/', function(req,res, next){
	res.json({
    'success': true
  })
})

const dropSync = true
 db.sequelize.sync({force: dropSync}).then(() => {
    console.log('Drop and Resync with { force: '+dropSync+' }');
    dropSync? initial.initial():console.log('finish without drop and sync table')
    console.log('finish');
    db.sequelize.showAllSchemas({}).then(schema=> console.log(schema))

});

app.get('/test', 
  function(req, res, next) { 
    req.custom   = true;
    req.myObject = { hello: 1 };
    next(); 
  })

  require('./app/router/middleware.router')(app)
  require('./app/router/user.router')(app);
  require('./app/router/role.router')(app)
   




