var express = require('express');
var router = express.Router();
var config = require('./config');
var winston = require('winston');
var fusionService = require('./fusionService');

// Consumer IN
router.post('/fusionAccountService', fusionService.processDQE);

module.exports = router;