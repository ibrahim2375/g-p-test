const express = require('express');
const router = express.Router();

const home_controller = require('../../controllers/home.controller')

router.get('/', home_controller.getHome);
// router.post('/users', template_controller.saveUser);

module.exports = router;
