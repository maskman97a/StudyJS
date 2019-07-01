const express = require('express'); // thư viện chứa mọi thứ
const bodyParser = require('body-parser'); // lấy dữ liệu nhập từ client
// const hbs = require('express-handlebars'); // handlebars
const mongoose = require('mongoose'); // thao tác với mongoDB
const bcrypt = require('bcrypt-nodejs'); // mã hóa password
const session = require('express-session'); //authentication & authorization

const userRouter = require('./routers/userRouter'); // khai báo router
const imageRouter = require('./routers/imageRouter');
const authRouter= require('./routers/authRouter');

const userModel = require('./models/userModel'); //khai báo model
const imageModel = require('./models/imageModel');
const commentModel = require('./models/commentModel');

const app = express(); //dùng app để chạy server

// app.engine("handlebars", hbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true })); // dùng bodyParser
app.use(bodyParser.json());

app.use(session({
    secret: "hello", // mã bí mật sử dụng trong đăng nhập
    resave: false, // làm cho 2 session cùng mở không bị đè lên nhau
    saveUninitialized: false, // lưu thông tin session dùng trong bán hàng, nếu là true thì sẽ không tạo session mới khi chưa tương tác
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
}));

app.use("/user", userRouter); // dùng Router
app.use("/image", imageRouter);
app.use("/auth", authRouter);

// app.use(express.static('public')); // tạo thư mục public
// app.use(express.static('views'));

mongoose.connect("mongodb://localhost:27017/hotgirl", { useNewUrlParser: true }, (err) => { //kết nối database mongoDB
    if (err) console.log(err)
    else console.log("Mongodb is connecting!");
});

app.get('/api', (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    req.session.username = "tung thanh"; // thêm vào session một biến

    const plainTextPassword = "123456789"; //khai báo ký tự password

    const salt = bcrypt.genSaltSync(); //mã hóa bằng genSaltSync

    const hashPassword = bcrypt.hashSync(plainTextPassword, salt); //mã hóa password bằng hashSync
    console.log("hashPassword: " + hashPassword + " salt: " + salt); //hiện password đã được mã hóa
    console.log(bcrypt.compareSync(plainTextPassword, hashPassword));
    console.log(bcrypt.compareSync("12456", hashPassword)); // thử 12345 với mật khẩu đã mã hóa = false 
    console.log(bcrypt.compareSync("123456789", hashPassword)); // thử 123456789 với mật khẩu đã mã hóa = true
    res.send("api router");
})

app.use('/api/auth',authRouter)

app.use((req, res, next) => {
    console.log("404");
    res.send("404");
})

app.get('/', (req, res) => {

    res.render('/user');
});


app.listen(2705, (err) => {
    if (err) console.log(err)
    else console.log('Server is listening at port 2705!');
});
