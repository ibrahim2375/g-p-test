require('dotenv').config();
var session = require('express-session');
const db = require('../../models');

const methods = {
    async getEditPage(req, res) {
        
        try {
        
            if (req.session.user && req.cookies.user_sid) {
                var studentResult = await db.csisResult.findAll({ where: { userId: 20210000, courseName: 'math1' } });
                res.render("instructor/insructorComponents/editPage.ejs", {
                    currentUser: req.session.user, hello:'hhh'
                });

            } else {
                res.redirect('/');
            }



        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }