var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = 8000;
app.listen((process.env.PORT || port), function() {
  console.log('Server now listening on port ' + port);
});

module.exports = app;