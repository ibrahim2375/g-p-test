const express = require('express');
const router = express.Router();
const db = require('../../../models');
const session = require('express-session');
const { sequelize } = require('sequelize');

router.get('/', async (req, res) => {

    res.send('Hello in Api Page');

});



module.exports = router;