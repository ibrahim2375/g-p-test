require('dotenv').config();
var session = require('express-session');
var db = require('../../models');
var errors = [null];

const methods = {
    async getRegister(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                var getCurrentUserData = await db.csisStudent.findOne({ where: { userId: req.session.user.id }, include: [db.users] });
                var getMatrials = await db.materials.findAll({ where: { level: getCurrentUserData.level, semester: 'first' } });  /////////////////////////and semester///////////////////////////
                var checkUserRegistration = await db.registration.findOne({ where: { userId: req.session.user.id } });
                var checkRegistration = await db.registration.findAll({ where: { userId: req.session.user.id } });
                if (checkUserRegistration) {
                    var showCoursesRegistered = checkRegistration;


                }

                // //new
                res.render("users/studentLayout/RegisterationPage.ejs", {
                    currentUser: req.session.user, showMaterials: getMatrials, checkR: checkUserRegistration, checked: showCoursesRegistered
                    , errors
                })
            } else {
                res.redirect('/');
            }

        } catch (error) {
            res.error(error.message, error.status)
        }
    },
    async postRegister(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                const checkRegistration = await db.registration.findOne({ where: { userId: req.session.user.id } });
                if (checkRegistration) {
                    res.redirect('/registeration');
                } else {
                    //register_controller
                    const { m0, m1, m2, m3, m4, m5 } = req.body;
                
                    var allm = [];
                    if (m0 || m1 || m2 || m3 || m4 || m5) {

                        allm.push(m0, m1, m2, m3, m4, m5);
                        allm.map(async function (find) {
                            if (find !== undefined) {
                                //add in registration datbase
                                await db.registration.create({
                                    userId: req.session.user.id,
                                    courseName: find
                                });
                                //add in matrial list in result datbase
                                await db.csisResult.create({
                                    userId: req.session.user.id,
                                    courseName: find
                                });
                            }


                        })
                        res.send("<script>alert('added')</script>");

                    } else {
                        res.redirect('/registeration')

                    }
                }
                //new
            } else {
                res.redirect('/');
            }

        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }