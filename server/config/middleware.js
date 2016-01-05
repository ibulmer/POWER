var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function (app, express) {
  app.use(express.static(__dirname + '/../../client'));                 // set the static files location /public/img will be /img for users
  app.use(morgan('dev'));                                         // log every request to the console
  app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
  app.use(bodyParser.json());                                     // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(methodOverride());
};