require('dotenv').config();
var session = require('express-session');
const methods = {
    async getExams(req, res) {
        try {
            const examsTablesOfYears = [
                { url: 'https://drive.google.com/drive/folders/1LsoxyAgjsO92n1bIpSOXSrGlfDq0xUqS', semester: "First Semester " },
                { url: 'https://drive.google.com/drive/folders/1vZHUFOBLKavXxtOPiD5O0qJmuzzw84rA', semester: "Second Semester " },


            ]
            res.render("users/studentLayout/ExamPage.ejs", { currentUser: req.session.user, examsTablesOfYears })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }