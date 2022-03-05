var session = require('express-session');
const Service = require('../services/users.service')
const { Validator } = require('node-input-validator');
require('dotenv').config();
const users = require('../../models');
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

            // let result = await Service.getUsers();
            // console.log("res", result);

            // const users = await db.User.findAll({ attributes: ['name'] }).then((user) => {
            //     console.log(user[0].name)
            // await users.User.findOne({ where: { email: req.session.user.email } }).then((user) => {
            //     console.log(user[0].name);
            // });
            // await users.User.findOne({ where: { email: req.session.user.email } }).then(function (user) {
            //     console.log(user)
        
            // });
          
            await users.User.findOne({ where: { email: req.session.user.email } }).then(function (user) {
                console.log(user);
            });


            res.render("users/student.ejs", { currentUser: req.session.user });


        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }