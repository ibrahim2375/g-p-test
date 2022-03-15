require('dotenv').config();
var session = require('express-session');

const db = require('../../models');
const methods = {
    async getRecords(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {

                const studentResult = await db.csisResult.findAll({ where: { userId: req.session.user.id } });



                res.render("users/studentLayout/AcadmicRecords.ejs", {
                    currentUser: req.session.user, studentResult
                });
            } else {
                res.redirect('/');
            }
        } catch (error) {
        }
    }
}
module.exports = { ...methods }