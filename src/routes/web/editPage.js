const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');
const db = require('../../../models');
// const editPage_controller = require('../../controllers/editPage.controller')

router.get('/:id', async (req, res) => {

    try {

        if (req.session.user && req.cookies.user_sid) {
            if (req.session.user.permission === 'instructor') {

                const instructorData = await db.instructor.findOne({ where: { userId: req.session.user.id } });
                const studentData = await db.users.findOne({ where: { id: req.params.id } });

                const studentResult = await db.csisResult.findOne({ where: { userId: req.params.id, courseName: instructorData.courseName } });
                res.render("instructor/insructorComponents/editPage.ejs", {
                    currentUser: req.session.user, studentResult, studentData
                });
            } else {
                res.send('<h1 style="text-align: center">You can not access this page you not have a permission</h1>')
            }

        } else {
            res.redirect('/');
        }



    } catch (error) {
        res.error(error.message, error.status)
    }
})

router.post('/:id', async (req, res) => {

    try {
        //check course of instructor
        const instructorData = await db.instructor.findOne({ where: { userId: req.session.user.id } });

        //check student status
        const studentData = await db.csisResult.findOne({ where: { userId: req.params.id } });
        if (!studentData) {
            res.redirect('/instructoredit');
        }
        const { quiz1, quiz2, midTerm, attendance, assignment, practical, final } = req.body;

        const totalOfValues = await parseFloat(quiz1) + parseFloat(quiz2) + parseFloat(midTerm) + parseFloat(attendance) + parseFloat(assignment) + parseFloat(practical) + parseFloat(final);


        await db.csisResult.update({ quiz1: quiz1, quiz2: quiz2, midTerm: midTerm, attendance: attendance, assignment: assignment, practical: practical, final: final, total: totalOfValues }, {
            where: {
                userId: req.params.id, courseName: instructorData.courseName
            }
        }).then(function (result) {
            // res.redirect(`/edit/${req.params.id}`);
            res.redirect('/instructoredit');
            // res.redirect('/instructoredit');

        });



    } catch (error) {
        res.error(error.message, error.status)
    }
})

module.exports = router;
