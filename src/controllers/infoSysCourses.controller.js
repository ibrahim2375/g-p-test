require('dotenv').config();
var session = require('express-session');

const methods = {
    async getInfoSysCourses(req, res) {
        try {

            if (req.session.user && req.cookies.user_sid) {


                //course  level 1
                const coursesLevel1First = [
                    { course: 'English 1', url: '/infoSys' },
                    { course: 'Math 1', url: 'http://' },
                    { course: 'Physics 1', url: 'http://' },
                    { course: 'Introduction to computer science', url: 'http://' },
                    { course: 'Fundamental of management', url: 'http://' },
                    { course: 'Introduction to programming', url: 'http://' }]
                const coursesLevel1Second = [
                    { course: 'English 2', url: 'http://' },
                    { course: 'Math 2', url: 'http://' },
                    { course: 'Microprocessor', url: 'http://' },
                    { course: 'structured programming', url: 'http://' },
                    { course: 'Discrete math', url: 'http://' },
                    { course: 'Digital systems', url: 'http://' }]

                //course  level 2
                const coursesLevel2First = [
                    { course: 'English 3', url: '/infoSys' },
                    { course: 'Math 3', url: 'http://' },
                    { course: 'Physics 3', url: 'http://' },
                    { course: 'Data Structure', url: 'http://' },
                    { course: 'Economic', url: 'http://' },
                    { course: 'Electronics 1', url: 'http://' }]
                const coursesLevel2Second = [
                    { course: 'English 4', url: 'http://' },
                    { course: 'Math 4', url: 'http://' },
                    { course: 'Assemply language', url: 'http://' },
                    { course: 'Data Base', url: 'http://' },
                    { course: 'Electronics 2', url: 'http://' },
                    { course: 'Organizational behavior', url: 'http://' }]

                //course level 3
                const coursesLevel3First = [
                    { course: 'accounting', url: '/infoSys' },
                    { course: 'Communication Network', url: 'http://' },
                    { course: 'computer Architecture', url: 'http://' },
                    { course: 'Object Oriented programming', url: 'http://' },
                    { course: 'Probabilities and Statistics', url: 'http://' },
                    { course: 'Software Engineering', url: 'http://' }]
                const coursesLevel3Second = [
                    { course: 'Algorithm', url: 'http://' },
                    { course: 'computer Graphics', url: 'http://' },
                    { course: 'computer interface', url: 'http://' },
                    { course: 'feasibility study', url: 'http://' },
                    { course: 'operating research1', url: 'http://' },
                    { course: 'Operating System', url: 'http://' }]

                //course level 4
                const coursesLevel4First = [
                    { course: 'Advanced Software', url: '/infoSys' },
                    { course: 'Communication skills', url: 'http://' },
                    { course: 'Image processing', url: 'http://' },
                    { course: 'Distributed System', url: 'http://' },
                    { course: 'AI', url: 'http://' }]
                const coursesLevel4Second = [
                    { course: 'Advanced database', url: 'http://' },
                    { course: 'Compiler', url: 'http://' },
                    { course: 'Computer security', url: 'http://' },
                    { course: 'Multi media', url: 'http://' },
                    { course: 'Selling & Markting', url: 'http://' }]

                res.render("courses/coursesOfColleges/infoSysCourses.ejs", {
                    currentUser: req.session.user, coursesLevel1First, coursesLevel1Second, coursesLevel2First,
                    coursesLevel2Second, coursesLevel3First, coursesLevel3Second, coursesLevel4First, coursesLevel4Second
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