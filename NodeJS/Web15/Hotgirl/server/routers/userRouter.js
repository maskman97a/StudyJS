const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const userModel = require('../models/userModel');

userRouter.use((req, res, next) => {
    console.log("user middleware");
    next();
});
//get user by id
userRouter.get("/:id", (req, res) => {
    let userId = req.params.id;
    console.log("Get all user");
    userModel.findById(userId)
        .then(userFound => res.json({ success: 1, user: userFound }))
        .catch(err => res.status(500).json({ success: 0, error: err }))
    // .catch(!userFound._id => res.status(400).json({ success: 0, message: "not found" }))
});

userRouter.use((req, res, next) => { //middle where
    const { userInfo } = req.body;
    if (userInfo && userInfo.role >= 1) {
        next();
    } else res.status(401).json({ success: 0, message: "Permission denied" });
});

// "api/user"=> get all
userRouter.get("/", (req, res, next) => {
    if (userInfo && userInfo.role >= 1) {
        next();
    } else res.status(401).json({ success: 0, message: "Permission denied" })
}, async (req, res) => {
    console.log("Get all user");
    try {
        const users = await userModel.find({}, "name email avatar intro posts")
            .populate("posts");
        res.json({ success: 1, users })
    }
    catch (err) {
        res.status(500).json({ success: 0, error: err })
    }
});

//create user
userRouter.post('/', (req, res) => {
    const { name, email, password, intro, avatar, posts } = req.body; // lấy dữ liệu từ client
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync()); // mã hóa password
    userModel.create({ name, email, hashPassword: "", intro, avatar, posts })
        .then(userCreated => res.status(201).json({ susccess: 1, user: userCreated }))
        .catch(err => res.status(500).json({ success: 0, message: err }))
});

//edit user
userRouter.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { name, password, avatar, intro } = req.body;

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());

    userModel.findById(userId)
        .then(userFound => {
            userFound.name = name || userFound.name;
            userFound.avatar = avatar || userFound.avatar;
            userFound.intro = intro || userFound.intro;
            userFound.save();
        })
        .then(userFound => {
            if ((bcrypt.compareSync(password, userFound.hashPassword) = false)) {
                userFound.hashPassword = hashPassword || userFound.hashPassword;
                userFound.save();
            } else console.log("trùng password cũ!");
        })
        .then(userUpdated => res.json({ success: 1, user: userUpdated }))
        .catch(err => res.status(500).json({ success: 0, message: err }));
});

//delete user
userRouter.delete('/:id', (req, res) => {
    var userId = req.params.id;
    userModel.remove({ _id: userId })
        .then(res.json({ success: 1 }))
        .catch(err => res.status(500).json({ success: 0, message: err }));
});

module.exports = userRouter;