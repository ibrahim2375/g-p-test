// const Service = require('../services/users.service')
// const { Validator } = require('node-input-validator');
require('dotenv').config();
var session = require('express-session');
const db = require('../../models');
const methods = {
    async getUsers(req, res) {
        try {
            

            if (req.session.user && req.cookies.user_sid) {

                const user = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.csisStudent] });
                const getAcadmicAdvisorInfo = await db.acadmicInfo.findOne({ where: { level: user.csisStudents[0].level } });
                // console.log(getAcadmicAdvisorInfo.name)

                if (!user) {
                    res.redirect('/')
                } else {


                    res.render("users/student.ejs", { currentUser: req.session.user, studentData: user, getAcadmicAdvisorInfo });
                }


            } else {
                res.redirect('/login');
            }

        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }