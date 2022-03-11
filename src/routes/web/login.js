const express = require('express');
const router = express.Router();
var session = require('express-session');
var User = require('../../../models');


const login_controller = require('../../controllers/login.controller')

const app = express();
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }
};
router.get('/', sessionChecker, login_controller.getLogin);
router.post('/', login_controller.getUser);



module.exports = router;
