const express = require('express');
const router = express.Router();
var session = require('express-session');

const courses_controller = require('../../controllers/courses.controller')

router.get('/', getCourses);
// router.post('/users', template_controller.saveUser);
async function getCourses(req, res) {
    try {

        if (req.session.user && req.cookies.user_sid) {

            res.render("courses/list.ejs", { currentUser: req.session.user })

        } else {
            res.redirect('/login');
        }



    } catch (error) {
        res.error(error.message, error.status)
    }
}
module.exports = router;
