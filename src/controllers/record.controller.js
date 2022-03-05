require('dotenv').config();
var session = require('express-session');
const methods = {
    async getRecords(req, res) {
        try {
            res.render("users/studentLayout/AcadmicRecords.ejs", { currentUser: req.session.user })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }