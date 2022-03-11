const express = require('express');
const router = express.Router();
var session = require('express-session');
const db = require('../../../models');
const records_controller = require('../../controllers/record.controller')

router.get('/', records_controller.getRecords);


module.exports = router;
