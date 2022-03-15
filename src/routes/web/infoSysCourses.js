const express = require('express');
const router = express.Router();

const infoSysCourses_controller = require('../../controllers/infoSysCourses.controller')

router.get('/', infoSysCourses_controller.getInfoSysCourses);


module.exports = router;
