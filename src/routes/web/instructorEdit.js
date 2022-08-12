const express = require('express');
const router = express.Router();
const session = require('express-session');
const { Sequelize } = require('../../../models');
const db = require('../../../models');
const Op = Sequelize.Op;
const instructorEdit_controller = require('../../controllers/instructorEdit.controller')

router.get('/', instructorEdit_controller.getInstructorEdit);
router.post('/', async (req, res) => {
    const search = req.body.search;
    const dataOfInstructor = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.instructor] });
    const studentRegisteredCourse = await db.csisResult.findAll({
        where: {
            courseName: dataOfInstructor.instructors[0].courseName, userId: {
                [Op.like]: `%${search}%`
            },
            pass: null
        }
    });
    if (studentRegisteredCourse) {
        res.render("instructor/insructorComponents/editScores.ejs", {
            currentUser: req.session.user, studentRegisteredCourse, dataOfInstructor
        });

    } else {
        res.redirect('/instructoredit');
    }

});
module.exports = router;
