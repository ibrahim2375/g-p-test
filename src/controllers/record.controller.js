require('dotenv').config();
var session = require('express-session');
var GpaCalculation = 0;
var TotalGpa = 0;
var gpas = 0;
const db = require('../../models');
const methods = {
    async getRecords(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {

                const studentResult = await db.csisResult.findAll({ where: { userId: req.session.user.id } });
                const materials = await db.materials.findAll();
                //calculate gpa
                var TotalgpasFrom4 = 0;
                var count = 0;
                materials.map(function (material) {

                    studentResult.forEach(function (studentRe) {
                        // console.log(studentRe.courseName);
                        if (studentRe.courseName === material.materialName) {
                            count += 1;
                            console.log("matrialName: ", material.materialName, " total: ", material.total, " student: ", studentRe.total);
                            GpaCalculation = studentRe.total / material.total * 4;
                            console.log("gpa of ", studentRe.courseName, " is : ", GpaCalculation);
                            TotalGpa += GpaCalculation;
                            console.log(TotalGpa);
                            TotalgpasFrom4 = count * 4;
                            gpas = TotalGpa / TotalgpasFrom4 * 4;
                        }
                    });

                });
                console.log("no of materials: ",count, " total of gpa matrial: ", TotalgpasFrom4 , " total of student from all matrial : ",gpas);
                // GpaCalculation = studentResult[0].total / materials[4].total * 4;

                res.render("users/studentLayout/AcadmicRecords.ejs", {
                    currentUser: req.session.user, studentResult ,gpas
                });
            } else {
                res.redirect('/');
            }
        } catch (error) {
        }
    }
}
module.exports = { ...methods }