const express = require('express');
const bodyParser = require('body-parser');
// const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const assert = require('assert');
const session = require('express-session');

const userModel = require('./models/userModel');
const itemModel = require('./models/itemModel');
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');
const authRouter = require('./routers/authRouter');
const itemRouter = require('./routers/itemRouter');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: "keyboardhero",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}));

app.use("/user", userRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use("/item", itemRouter);
app.use(express.static('private'));
app.use(express.static('views'));

mongoose.connect("mongodb://localhost:27017/mrprofessor", { useNewUrlParser: true }, (err) => {
    if (err) console.log(err)
    else console.log("Mongodb is connecting!");
});


app.get("/api", (req, res) => {
    try {
        if (req.session.userInfo == undefined) {
            res.status(200).json({ success: 1, roleId: '' });
        } else {
            res.status(200).json({ success: 1, userInfo: req.session.userInfo });
        }
    } catch (err) {
        res.status(500).json({ success: 0, message: err });
    }
});


app.get("", (req, res) => {

});

// Middleware
// app.use((req, res, next) => {
//     console.log("404");
//     res.send("404");
// });

var port = 3100;
app.listen(port, (err) => {
    if (err) console.log(err)
    else console.log('Server is listening at port ' + port + '!');
});


