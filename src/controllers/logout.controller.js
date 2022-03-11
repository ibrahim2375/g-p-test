require('dotenv').config();
var session = require('express-session');

const methods = {
    async logOut(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                res.clearCookie('user_sid');
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }