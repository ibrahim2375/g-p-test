const Service = require('../services/users.service')
const { Validator } = require('node-input-validator');
require('dotenv').config();
// const User = require('../../models/user');
const db = require('../../models');
const methods = {
    async saveUser(req, res) {
        try {
            const v = new Validator(
                req.body,
                {
                    'imageDetails': 'required|object',
                    'imageDetails.startPoint.x': 'required|numeric',
                    'imageDetails.startPoint.y': 'required|numeric',
                    'imageDetails.width': 'required|numeric',
                    'imageDetails.height': 'required|numeric',
                    'imageDetails.angle': 'required|numeric',
                },
            );

            if (v.fails()) {
                if (!(Object.keys(v.errors).length === 0 && v.errors.constructor === Object))
                    res.status(400).render()
            }

            let result = await Service.getUsers();
            console.log("res", result);


            res.render("Login/login.ejs", { users: [result] });




        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }