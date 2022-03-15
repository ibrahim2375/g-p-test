require('dotenv').config();
var session = require('express-session');
const db = require('../../models');

const methods = {
    async getEditPage(req, res) {
        
        try {
        



        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }