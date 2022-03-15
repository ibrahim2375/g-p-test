const express = require('express');
const router = express.Router();

const RequierdDocuments_controller = require('../../controllers/requierdDocuments.controller')

router.get('/', RequierdDocuments_controller.getRequierdDocuments);
// router.post('/users', template_controller.saveUser);

module.exports = router;
