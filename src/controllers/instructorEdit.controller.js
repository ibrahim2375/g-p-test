require('dotenv').config();
var session = require('express-session');
const db = require('../../models');

const methods = {
    async getInstructorEdit(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                const dataOfInstructor = await db.users.findOne({ where: { email: req.session.user.email }, include: [db.instructor] });
                const studentRegisteredCourse = await db.csisResult.findAll({ where: { courseName: dataOfInstructor.instructors[0].courseName } });
                res.render("instructor/insructorComponents/editScores.ejs", { currentUser: req.session.user, studentRegisteredCourse, dataOfInstructor
});
            } else {
                res.redirect('/')
            }
        } catch (error) {
            res.error(error.message, error.status)
        }
    }

 

    
}


module.exports = { ...methods }