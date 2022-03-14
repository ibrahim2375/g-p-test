require('dotenv').config();
var session = require('express-session');
var users = require('../../models/');
const methods = {
    async getHome(req, res) {
        try {
            const infoInCards = [
                {
                    img: '/images/info111.jpg', title: 'Academic & artistic excellence',
                    desc: `We offer one of the world’s great undergraduate educations. We will
                     cultivate your curiosity and help you master the tools necessary to
                     engage humanity s most vexing challenges, debates, and artistic
                     frontiers`,
                    time: new Date
                },
                {
                    img: '/images/info13.jpeg', title: 'Learning & Labor',
                    desc: ` It's not just our motto, it's our practice. Hands-on experience is a
                    critical part of an Oberlin education. In research and scholarship, in
                    creative work and performance, we make the connections between
                    learning and doing,`,
                    time: new Date
                },
                {
                    img: '/images/info11.jpg', title: 'A restlessness of innovation',
                    desc: `From the very beginning—as the first college to adopt a policy to
                    admit Black students and the first to grant undergraduate degrees to
                    women in a co-ed program—we have championed critical work that yields
                    necessary progress: new discoveries`,
                    time: new Date
                },]
            res.render("index.ejs", { currentUser: req.session.user, infoInCards })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }