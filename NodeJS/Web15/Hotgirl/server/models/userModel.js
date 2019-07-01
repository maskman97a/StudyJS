const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashPassword: { type: String, require: true },
    avatar: { type: String },
    intro: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: "image" }]
});

userSchema.pre("save", (next) => {
    console.log(this);
    // this.password = bcrypt.hashSync();
    next();
})

module.exports = mongoose.model('user', userSchema);