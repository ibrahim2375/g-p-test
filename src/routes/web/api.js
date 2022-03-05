const express = require('express');
const router = express.Router();
const db = require('../../../models');


router.get('/', (req, res) => {
    db.User.findAll({ attributes: ['name','email']}).then((user) => {
        res.send(user)
        // console.log(user)
    });
});

// // router.post('/users', template_controller.saveUser);

module.exports = router;