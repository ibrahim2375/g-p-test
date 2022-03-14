require('dotenv').config();
var session = require('express-session');
var db = require('../../models');
var errors = [];

const methods = {
    async getLogin(req, res) {
        try {
            res.render('Login/login.ejs', { errors });

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

                    res.redirect('/login');
                } else {
                    req.session.user = user.dataValues;
                    res.redirect('/');
                }
            });

            //check parents
            // var parentId = req.body.keyParent;
            // if (parentId !== null) {
            //     await db.parent.findOne({ where: { key: parentId } }).then(function (user) {
            //         if (!user) {

            //             res.redirect('/login');
            //         } else {
            //             req.session.user = user.dataValues;
            //             res.redirect('/');
            //         }
            //     })
            // }


        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }