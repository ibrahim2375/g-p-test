require('dotenv').config();
var session = require('express-session');

const methods = {
    async getInfoSys(req, res) {
        try {
     
            res.render("colleges/infoSys.ejs", { currentUser: req.session.user, title: 'info sys'})
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }