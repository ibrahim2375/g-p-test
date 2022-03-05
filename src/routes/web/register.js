const express = require('express');
const router = express.Router();

const register_controller = require('../../controllers/register.controller')

router.get('/', register_controller.getRegister);
// router.post('/users', template_controller.saveUser);

module.exports = router;
