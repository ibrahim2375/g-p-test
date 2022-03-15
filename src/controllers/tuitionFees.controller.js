require('dotenv').config();
const methods = {
    async getTuitionFees(req, res) {
        try {


            res.render('Admission/Tuitionfees.ejs', { currentUser: req.session.user ,title: 'Tuition Fees' });


        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }