require('dotenv').config();
var session = require('express-session');
const db = require('../../models');
const methods = {
    async getInstructor(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {

                const dataOfInstructor = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.instructor] });

                res.render("instructor/instructor.ejs", { currentUser: req.session.user, dataOfInstructor })
            } else {
                res.redirect('/');
            }

        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }