const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({
    username: { type: String, require: true, unique: true },
    hashPassword: { type: String, require: true },
    fullname: { type: String, require: false },
    roleId: { type: Number, require: true, default: 0 }
}, {
        timestamps: true
    });

module.exports = mongoose.model('user', userSchema);
