require('dotenv').config();
var session = require('express-session');
const methods = {
    async getRequierdDocuments(req, res) {
        try {


            res.render('Admission/RequierdDocuments.ejs', { currentUser: req.session.user, title: 'Requierd Documents' });


        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }