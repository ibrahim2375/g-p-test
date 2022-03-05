require('dotenv').config();
var session = require('express-session');
const methods = {
    async getHome(req, res) {
        try {
            var userinfo = { userName: '', loggedin: false };
            if (req.session.user && req.cookies.user_sid) {
                userinfo.loggedin = true;
                userinfo.userName = req.session.user.email;
                // console.log(JSON.stringify(req.session.user));
                // console.log(req.session.user.email);

                // res.render('index.ejs', userinfo);
            }
            res.render("index.ejs", { currentUser: req.session.user, user: [userinfo]})
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }