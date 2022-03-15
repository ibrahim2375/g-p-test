require('dotenv').config();
var session = require('express-session');
var db = require('../../models');
var message = [];

const methods = {
    async getLogin(req, res) {
        try {
            res.render('Login/login.ejs', { message });

        } catch (error) {
            res.error(error.message, error.status)
        }
    },
    async getUser(req, res) {
        try {

            var username = req.body.email,
                password = req.body.password;
            //sequelize check user
            await db.users.findOne({ where: { email: username, password: password } }).then(function (user) {
                if (!user) {
                    message.push("email not correct or password");
                    res.redirect('/login');

                } else {
                    req.session.user = user.dataValues;
                    message.pop();
                    res.redirect('/');
                }
            });


        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }