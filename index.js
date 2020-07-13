var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var initial = require('./initial')
app.use(bodyParser.json())
//connect configure database
const db = require('./app/config/db.config')

require('./app/router/user.router.js')(app);
//list router

var server = app.listen(2020, function(){
    var host = server.address().address
    var port = server.address().address
    console.log("App listening at http://%s:%s", host, port)
})

app.get('/', function(req,res){
	res.send('hello ITAsset On Express JS')
})

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial.initial();
    console.log('finish');
});



app.get('/test', 
  function(req, res, next) { 
    res.locals.custom   = true;
    res.locals.myObject = { hello: 1 };
    next(); 
  }, 
  function(req, res) { 
    console.log('See:', res.locals.custom, res.locals.myObject); 
    return res.status(200).send(res.locals); 
  });



   




