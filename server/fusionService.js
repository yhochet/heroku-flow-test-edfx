var Q = require('q');
var config = require('./config');
var winston = require('winston');

function processDQE(req, res) {
    winston.info('Calling DQE...');    
    res.status(501).send('To be implemented');
}

exports.processDQE = processDQE;

console.log('echo');