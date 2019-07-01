const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const authRouter = express.Router();

const userModel = require('../models/userModel');

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let userFound = await userModel.findOne({ email: email })
        if (!userFound || !userFound._id) {
            res.status(404).json({ success: 0, message: "no user found" })
        } else {
            if (!bcrypt.compareSync(password, userFound.hashPasswod)) {
                res.status(401).json({ success: 0, message: "Wrong password" });
            } else {
                req.session.userInfo = {
                    name: userFound.name,
                    email: userFound.email,
                    id: userFound._id,
                    role:1
                }
                // admin role:1, user: 0
                res.json({ success: 1, message: "đăng nhập thành công!" })
            }
        }
    }
    catch (error) {
        res.status(500).json({ success: 0, error });
    }

});

authRouter.delete("/logout", (req, res) => {
    req.session.destroy();
    req.session.userInfo = undefined;
    res.json({ success: 1, message: "logout successful" });
});

authRouter.post("/register", (req, res) => {

});

module.exports = authRouter;