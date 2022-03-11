require('dotenv').config();
var session = require('express-session');
const methods = {
    async getCourses(req, res){
        try {

            if (req.session.user && req.cookies.user_sid) {

                res.render("courses/list.ejs", { currentUser: req.session.user })

            } else {
                res.redirect('/login');
            }



        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }