const express = require('express');
const router = express.Router();

const infoSys_controller = require('../../controllers/infoSys.controller')

router.get('/', infoSys_controller.getInfoSys);


module.exports = router;