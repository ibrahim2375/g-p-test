const express = require('express');
// const req = require('express/lib/request');
const router = express.Router();
var session = require('express-session');
// const home_controller = require('../../controllers/home.controller')

router.get('/',(req , res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});
// router.post('/users', template_controller.saveUser);

module.exports = router;