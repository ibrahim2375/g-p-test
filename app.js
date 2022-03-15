const express = require('express');
//new
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// const flash = require('connect-flash');
// const db = require('./models');
//new

const app = express();
require('dotenv').config();
// const port = process.env.PORT
// const host = process.env.URL
const port = 3000
const host = '127.0.0.1'

//message
// app.use(flash());

// app.use(function (req, res, next) {
//     res.locals.message = req.flash();
//     next();
// });
//new
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
//new

const createError = require('http-errors');

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs')


//new
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});


//new

// call sysc()
const db = require("./models");
db.sequelize.sync();

//routes

const indexRouter = require('./src/routes/index');

app.use('/', indexRouter);


//image
app.use(express.static("public"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    console.log("error", err)
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json(err);
});


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

