require('dotenv').config();
var session = require('express-session');
var db = require('../../models');
const { Op } = require("sequelize");
var message = [];
var getMatrials;
var totalHours;
const methods = {
    async getRegister(req, res) {
        try {

            // prerequisites: 0, materialName: getResults[0].courseName 
            if (req.session.user && req.cookies.user_sid) {
                //get current semester 
                var term = await db.semester.findOne();
                // console.log();
                var getCurrentUserData = await db.csisStudent.findOne({ where: { userId: req.session.user.id }, include: [db.users] });
                // var getMatrials = await db.materials.findAll({ where: { level: getCurrentUserData.level, semester: 'second' } });
                const showAllResult = await db.csisResult.findAll({ where: { userId: req.session.user.id } });
                var getResults0 = await db.csisResult.findAll({ where: { pass: 0, userId: req.session.user.id } });
                var getResults1 = await db.csisResult.findAll({
                    where: {
                        pass: 1, userId: req.session.user.id
                    }
                });
                // showAllResult.map(result => console.log(result.pass))
                // console.log(getResults0.length)
                //get prerequisites
                // console.log(showAllResult[1].courseName);
                // check for first year not have any matrial ===== solve
                if (showAllResult.length === 0) {
                    getMatrials = await db.materials.findAll({
                        where: {
                            prerequisites: "0",
                            semester: term.current
                        }, order: [['code']],
                    });
                    //total hours
                    totalHours = await db.materials.sum('hours', {
                        where: {
                            prerequisites: "0",
                            semester: term.current
                        }, order: [['code']],
                    }); //total hours
                    // console.log(totalHours);
                } else {//////////////////////////  level and prerequisites

                    ///////////////////////////////////////////////////////////
                    //check pre 
                    if (showAllResult.length > 0) {

                        if (getResults0.length > 0 && getResults1.length > 0) {

                            showAllResult.map(async function (all) {
                                getResults1.map(async function (result1) {
                                    getMatrials = await db.materials.findAll({
                                        where: {
                                            [Op.or]: [

                                                {
                                                    prerequisites: all.code,
                                                }
                                                ,
                                                {
                                                    [Op.not]: [
                                                        { materialName: result1.courseName }
                                                    ]

                                                }
                                            ],

                                            semester: term.current
                                        }, order: [['code']],
                                    });


                                    totalHours = await db.materials.sum('hours', {
                                        where: {
                                            [Op.or]: [

                                                {
                                                    prerequisites: all.code
                                                }
                                                ,
                                                {
                                                    [Op.not]: [
                                                        { materialName: result1.courseName }
                                                    ]

                                                }
                                            ],
                                            semester: term.current
                                        }, order: [['code']],
                                    });
                                });

                            });
                        } else if (getResults0.length > 0 && getResults1.length === 0) {
                            showAllResult.map(async function (all) {
                                getResults0.map(async function (result0) {
                                    getMatrials = await db.materials.findAll({
                                        where: {
                                            [Op.or]: [
                                                {
                                                    materialName: result0.courseName
                                                },
                                                {
                                                    prerequisites: all.code
                                                },

                                            ],
                                            semester: term.current
                                        }, order: [['code']],

                                    });
                                    totalHours = await db.materials.sum('hours', {
                                        where: {
                                            [Op.or]: [
                                                {
                                                    materialName: result0.courseName
                                                },
                                                {
                                                    prerequisites: all.code
                                                },

                                            ],
                                            semester: term.current
                                        }, order: [['code']],
                                    });
                                });
                            });
                        }
                        else {
                            // console.log("hello");
                            getResults1.map(async function (result1) {

                                getMatrials = await db.materials.findAll({
                                    where: {
                                        [Op.and]: [

                                            { level: getCurrentUserData.level },
                                            {
                                                [Op.not]: [

                                                    { materialName: result1.courseName }
                                                ]
                                            },
                                            { semester: term.current }

                                        ]


                                    }, order: [['code']],
                                });



                                totalHours = await db.materials.sum('hours', {
                                    where: {
                                        [Op.and]: [

                                            { level: getCurrentUserData.level },
                                            {
                                                [Op.not]: [

                                                    { materialName: result1.courseName }
                                                ]
                                            },
                                            { semester: term.current }

                                        ]


                                    }, order: [['code']],
                                });

                            });



                        }

                    }




                }/////////////////////////////
                var checkUserRegistration = await db.registration.findOne({ where: { userId: req.session.user.id } });
                var materials = await db.materials.findAll();
                var checkRegistration = await db.registration.findAll({ where: { userId: req.session.user.id } });
                if (checkUserRegistration) {
                    var showCoursesRegistered = checkRegistration;
                }

                //calculate total hours registered
                var TotalHoursRegistered = 0;
                //  console.log(materials.materialName);
                materials.map(function (m) {
                    checkRegistration.forEach(function (re) {
                        if (re.courseName === m.materialName) {
                            TotalHoursRegistered += m.hours;
                        }
                    })

                });
                // console.log(TotalHoursRegistered);
                //update Total hours registered
                const updateTotalHours = await db.csisStudent.update({ TotalHours: TotalHoursRegistered }, {
                    where: {
                        userId: req.session.user.id
                    }
                })


                //calculate total hours registered
                //get data of materials

                // get TotalHoursOfAllMaterials
                var calculatedTotalReminder = 136 - getCurrentUserData.TotalHoursOfAllMaterial;
                // console.log(calculatedTotalReminder);


                // var materialsData = await db.materials.findAll({ where: { materialName: md.courseName } });
                // checkRegistration.map(async function (md) {
                //     let materialsData = await db.materials.findAll({ where: { materialName: md.courseName } });

                //     materialsData.map(function (m){
                //         console.log(m.code);
                //     })

                // var materials = await db.materials.findAll();
                const user = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.csisStudent] });
                const getAcadmicAdvisorInfo = await db.acadmicInfo.findOne({ where: { level: user.csisStudents[0].level } });
                res.render("users/studentLayout/RegisterationPage.ejs", {
                    currentUser: req.session.user, showMaterials: getMatrials, checkR: checkUserRegistration, checked: showCoursesRegistered
                    , message, totalHours, TotalHoursRegistered, getAcadmicAdvisorInfo, user, calculatedTotalReminder, getCurrentUserData
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

                        });

                        res.redirect('/registeration');

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