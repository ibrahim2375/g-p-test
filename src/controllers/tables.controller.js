require('dotenv').config();
var session = require('express-session');
const methods = {
    async getTables(req, res) {
        try {
            const tablesOfYears = [
                { url: 'https://drive.google.com/drive/folders/1y5YcgiZ5Mj_LfFNU-Qm0PysfkrszRt7l', level: 1 },
                { url: 'https://drive.google.com/drive/folders/1MXk634lZnViv3NubObNN31e0mndE5d3h', level: 2 },
                { url: 'https://drive.google.com/drive/folders/1-SvwOJlrBoaALDAWHZBwU7kaZSXeIApA', level: 3 },
                { url: 'https://drive.google.com/drive/folders/1QoRs-FDKmACnY6N6_add05G7AmTCb5ll', level: 4 }
            ]
            res.render("users/studentLayout/TablePage.ejs", { currentUser: req.session.user, tablesOfYears })
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }