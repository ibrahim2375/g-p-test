const express = require('express');
const router = express.Router();

const courses_controller = require('../../controllers/courses.controller')

router.get('/', courses_controller.getCourses);

module.exports = router;
