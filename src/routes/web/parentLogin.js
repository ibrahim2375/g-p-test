const express = require('express');
const router = express.Router();
const session = require('express-session');
const db = require('../../../models');
router.post('/', async (req, res) => {
    //check parents

    var parentId = req.body.keyParent;
    if (parentId !== null) {
        await db.parent.findOne({ where: { key: parentId } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/');
            }
        })
    }
    else {
        res.redirect('/login');
    }

});
// router.post('/users', template_controller.saveUser);

module.exports = router;
