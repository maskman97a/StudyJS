const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref:'user'},
    view: { type: Number },
    like: { type: Number },
    date: { type: Date },
    url: { type: String },
    caption: { type: String },
    title: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref:'comment' }],
});

module.exports = mongoose.model('image', imageSchema);