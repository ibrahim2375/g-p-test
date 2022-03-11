const express = require('express');
const router = express.Router();
var session = require('express-session');
var db = require('../../../models');
var errors = [null];
// new
const register_controller = require('../../controllers/register.controller')
router.get('/', register_controller.getRegister);
router.post('/', register_controller.postRegister);

module.exports = router;
