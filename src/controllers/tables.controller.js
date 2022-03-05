require('dotenv').config();
var session = require('express-session');
const methods = {
    async getTables(req, res) {
        try {
            res.render("users/studentLayout/TablePage.ejs", { currentUser: req.session.user })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }