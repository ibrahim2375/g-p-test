const express = require('express');
const router = express.Router();

const tuitionFees_controller = require('../../controllers/tuitionFees.controller')

router.get('/', tuitionFees_controller.getTuitionFees);
// router.post('/users', template_controller.saveUser);

module.exports = router;
