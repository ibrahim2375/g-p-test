require('dotenv').config();
var session = require('express-session');
const methods = {
    async getCourses(req, res){
        try {
            res.render("courses/list.ejs",  { currentUser: req.session.user })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }