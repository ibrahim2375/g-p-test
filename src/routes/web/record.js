const express = require('express');
const router = express.Router();

const records_controller = require('../../controllers/record.controller')

router.get('/', records_controller.getRecords);
// router.post('/users', template_controller.saveUser);

module.exports = router;
