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
                            // console.log("matrialName: ", material.materialName, " total: ", material.total, " student: ", studentRe.total);
                            GpaCalculation = studentRe.total / material.total * 4;
                            count += 1;
                            // console.log("gpa of ", studentRe.courseName, " is : ", GpaCalculation);
                            TotalGpa += GpaCalculation;
                        }
                    });
                    // gpas = 0;

                });
                // console.log(GpaCalculation);
                TotalgpasFrom4 = count * 4;
                gpas = TotalGpa / TotalgpasFrom4 * 4;
                TotalgpasFrom4 = 0, count = 0, TotalGpa = 0;
                // update gpas
                if (gpas <= 4) {
                    var gpasAccurated = Math.round((gpas + Number.EPSILON) * 100) / 100;
                    const updateGpa = await db.csisStudent.update({ gpas: gpasAccurated }, {
                        where: {
                            userId: req.session.user.id
                        }
                    }).then(function (result) {

                        console.log(result, " Updated gpa");

                    });
                } else {
                    console.log("can't updated");
                }

                // update gpas

                // console.log("no of materials: ", count, " total of gpa matrial: ", TotalgpasFrom4, " total of student from all matrial : ", gpas);
                // GpaCalculation = studentResult[0].total / materials[4].total * 4;
                //calculat accurate gpas
                // var gpasAccurated = Math.round((gpas + Number.EPSILON) * 100) / 100;

                ///calculate total TotalHours Registered from first term
                var counterOfNumberOfM = 0;
                var TotalHoursOfAllMaterials = 0;
                materials.map(function (material) {

                    studentResult.forEach(function (studentRe) {

                        if (studentRe.courseName === material.materialName) {
                            console.log(material.hours);
                            TotalHoursOfAllMaterials += material.hours;

                        }
                    });


                });
                // console.log(TotalHoursOfAllMaterials);
                // update to user profile
                await db.csisStudent.update({ TotalHoursOfAllMaterial: TotalHoursOfAllMaterials }, {
                    where: {
                        userId: req.session.user.id
                    }
                }).then(function (result) {

                    console.log(result, " Updated TotalHoursOfAllMaterials");

                });
                // TotalHoursOfAllMaterials = 0;
                ///calculate total TotalHours Registered from first term

                res.render("users/studentLayout/AcadmicRecords.ejs", {
                    currentUser: req.session.user, studentResult, gpasAccurated, TotalHoursOfAllMaterials
                });
            } else {
                res.redirect('/');
            }
        } catch (error) {
        }
    }
}
module.exports = { ...methods }