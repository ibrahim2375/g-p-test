const express = require('express');
const router = express.Router();

const exams_controller = require('../../controllers/exam.controller')

router.get('/', exams_controller.getExams);
// router.post('/users', template_controller.saveUser);

module.exports = router;
