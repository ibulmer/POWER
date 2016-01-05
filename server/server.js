//set up ===================================
var express  = require('express');
var app      = express();  
var mongoose = require('mongoose');

//configuration ============================

mongoose.connect('mongodb://localhost/Mvp');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
// app.get('/', function(req, res) {
//   res.sendfile('index.html'); 
// });

//start the app on Port 8080
app.listen(8080);
console.log("App listening on port 8080");
