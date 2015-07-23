var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');

//Kết nối cơ sở dữ liệu
var db = require('./config/database');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));

var routes =require('./app/routes');

routes(app);

server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports=app;
