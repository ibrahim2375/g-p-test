const express = require('express');
const router = express.Router();

const archive_controller = require('../../controllers/archive.controller')

router.get('/', archive_controller.getArchive);

module.exports = router;
