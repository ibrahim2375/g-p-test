require('dotenv').config();
var session = require('express-session');
const methods = {
    async getExams(req, res) {
        try {
            const examsTablesOfYears = [
                { url: 'http://', level: 1, desc: 'For First year', semester: 'First Semester' },
                { url: 'http://', level: 2, desc: 'For Second year', semester: 'First Semester' },
                { url: 'http://', level: 3, desc: 'For Third year', semester: 'First Semester' },
                { url: 'http://', level: 4, desc: 'For Fourth year', semester: 'First Semester' }
            ]
            res.render("users/studentLayout/ExamPage.ejs", { currentUser: req.session.user, examsTablesOfYears })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }