var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var initial = require('./initial')
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
//connect configure database

const db = require('./app/config/db.config')

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

const dropSync = false
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
  }, 
  function(req, res) { 
    const var1 = req.custom;
    const var2 = req.myObject;
    console.log(typeof(var1))
    console.log(typeof(var2))
    return res.json({
      'var1' : var1,
      'var2': var2
    }); 
  });



   




