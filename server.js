var express = require('express');
var app = express();
var winston = require('winston');
var bodyParser = require('body-parser');
var compression = require('compression');
var Q = require('q');
var routes = require('./server/routes');
  
app.set('port', (process.env.PORT || 5000));
app.use(compression());
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// For parsing application/json
app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));
app.use('/api', routes);
    
app.get('/', function(request, response) {
  response.send('SMCP core application is up!');
})       
   
app.listen(app.get('port'), function() {
  winston.info('SMCP core app is running on port ' + app.get('port'));    
});