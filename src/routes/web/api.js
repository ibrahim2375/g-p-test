const express = require('express');
const router = express.Router();
const db = require('../../../models');
const session = require('express-session');
const { sequelize } = require('sequelize');

router.get('/', async (req, res) => {
    // const dataOfInstructor = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.instructor] });
    // var studentResult = await db.csisResult.findAll({ where: { courseName: dataOfInstructor.instructors[0].courseName } });
    // const studentResult = await db.csisResult.findAll({ where: { userId: 20210000, courseName: 'math1' } });
    // const sonResult = await db.csisResult.findAll({ where: { userId: 20210000 }, include: db.users });
    // const sonData = await db.csisStudent.findOne({ where: { userId: 20210000 }, include: db.users });

    // getstudents.instructors[0].courseName
    // res.send(sonData)

});



module.exports = router;