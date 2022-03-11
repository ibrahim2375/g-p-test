const express = require('express');
// const req = require('express/lib/request');
const router = express.Router();
var session = require('express-session');
const logout_controller = require('../../controllers/logout.controller')

router.get('/', logout_controller.logOut);
// router.post('/users', template_controller.saveUser);

module.exports = router;