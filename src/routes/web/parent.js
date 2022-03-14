const express = require('express');
const router = express.Router();

const parent_controller = require('../../controllers/parent.controller')

router.get('/', parent_controller.getParentInfo);


module.exports = router;
