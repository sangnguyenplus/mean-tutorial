var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

var routes =require('./app/routes');

routes(app);

server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports=app;
