require('dotenv').config();
var session = require('express-session');
const methods = {
    async getExams(req, res) {
        try {
            res.render("users/studentLayout/ExamPage.ejs", { currentUser: req.session.user })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }