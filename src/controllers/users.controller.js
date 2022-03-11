// const Service = require('../services/users.service')
// const { Validator } = require('node-input-validator');
require('dotenv').config();
var session = require('express-session');
const db = require('../../models');
const methods = {
    async getUsers(req, res) {
        try {
            // const v = new Validator(
            //           req.body,
            //     {
            //         'imageDetails': 'required|object',
            //         'imageDetails.startPoint.x': 'required|numeric',
            //         'imageDetails.startPoint.y': 'required|numeric',
            //         'imageDetails.width': 'required|numeric',
            //         'imageDetails.height': 'required|numeric',
            //         'imageDetails.angle': 'required|numeric',
            //     },
            // );

            // if (v.fails()) {
            //     if (!(Object.keys(v.errors).length === 0 && v.errors.constructor === Object))
            //          res.status(400).render()
            // }

            // let result =  await Service.getUsers();
            // console.log("res", result);

                if (req.session.user && req.cookies.user_sid) {
    

                    await db.users.findOne({ where: { email: req.session.user.email }, include: [db.csisStudent] }).then(function (user) {
                       
                        if (!user) {
                            res.redirect('/')
                        } else {
                         
                            res.render("users/student.ejs", { currentUser: req.session.user, studentData: user });
                        }
                    });

                } else {
                    res.redirect('/login');
                }

            } catch (error) {
                res.error(error.message, error.status)
            }
    }
}

module.exports = { ...methods }