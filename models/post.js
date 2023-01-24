const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;