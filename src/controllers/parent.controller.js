require('dotenv').config();
var session = require('express-session');
var db = require('../../models');
const methods = {
    async getParentInfo(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                const parentData = await db.parent.findOne({ where: { key: req.session.user.key } });
                if (parentData) {
                    const sonResult = await db.csisResult.findAll({ where: { userId: parentData.userId } });
                    const sonData = await db.csisStudent.findOne({ where: { userId: parentData.userId }, include: db.users });
                    res.render("parent/infoPage.ejs", { currentUser: req.session.user, sonResult, sonData });

                } else {
                    res.send('there error key not founded');
                }
            } else {
                res.redirect('/');
            }

        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }