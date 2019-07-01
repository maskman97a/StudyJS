const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: String, required: true },
    content: { type: String }
});

module.exports = mongoose.model('comment', commentSchema);