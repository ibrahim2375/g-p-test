require('dotenv').config();
var session = require('express-session');
const methods = {
    async getTables(req, res) {
        try {
            const tablesOfYears = [
                { url: 'http://', level: 1 },
                 { url: 'http://', level: 2 }, 
                 { url: 'http://', level: 3 }, 
                 { url: 'http://', level: 4 }
            ]
            res.render("users/studentLayout/TablePage.ejs", { currentUser: req.session.user, tablesOfYears })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }