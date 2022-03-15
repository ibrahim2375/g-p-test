require('dotenv').config();
var session = require('express-session');
const methods = {
    async getCourses(req, res) {
        try {

            if (req.session.user && req.cookies.user_sid) {
                const colleges = [{ title: 'Applied Arts', img: '/images/Arts.jpg', url: 'http://' },
                { title: 'Economics & Management', img: '/images/Economics.jpg', url: 'http://' },
                { title: 'Engineering', img: '/images/engineering.jpg', url: 'http://' },
                { title: 'Faculty of Nursing', img: '/images/nursing.jpg', url: 'http://' },
                { title: 'Info. Systems & Comp.Science', img: '/images/infosys.jpg', url: '/infoSysCourses' },
                { title: 'Languages&Translation', img: '/images/languages.jpg', url: 'http://' },
                { title: 'Media & Mass Comm', img: '/images/media.jpg', url: 'http://' },
                { title: 'Medicine', img: '/images/medicine.jpg', url: 'http://' },
                { title: 'Pharmacy', img: '/images/pharmacy.jpg', url: 'http://' },
                { title: 'Physical Therapy', img: '/images/physical.jpg', url: 'http://' },
                { title: 'Postgraduate Studies', img: '/images/postgraduate.png', url: 'http://' },
                { title: 'Tourism and Hotels', img: '/images/tourism.png', url: 'http://' },
                ]
                res.render("courses/list.ejs", {
                    currentUser: req.session.user, colleges
                })

            } else {
                res.redirect('/login');
            }



        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }