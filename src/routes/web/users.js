const express = require('express');
const router = express.Router();
const template_controller = require('../../controllers/users.controller');

router.get('/', template_controller.getUsers);



module.exports = router;
