require('dotenv').config();
var session = require('express-session');
const db = require('../../models');
const methods = {
    async getArchive(req, res) {
        try {

            if (req.session.user && req.cookies.user_sid) {
                const matrialData = await db.materials.findAll();
                res.render("users/studentLayout/ArchivePage.ejs", {
                    currentUser: req.session.user, matrialData
                })

            } else {
                res.redirect('/login');
            }



        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }