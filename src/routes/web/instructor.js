const express = require('express');
const router = express.Router();

const instructor_controller = require('../../controllers/instructor.controller')

router.get('/', instructor_controller.getInstructor );


module.exports = router;
