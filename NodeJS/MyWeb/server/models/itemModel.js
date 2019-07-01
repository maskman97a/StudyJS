const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const itemSchema = new Schema({
    itemName: { type: String, require: true },
    itemLink: { type: String, require: true },
    author: { type: String, require: true },
    description: { type: String, require: false }
}, {
        timestamps: true
    });

module.exports = mongoose.model('items', itemSchema);
