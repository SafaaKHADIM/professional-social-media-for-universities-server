const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var likesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'user Id  can\'t be empty'
    }
});
var dislikesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'user Id  can\'t be empty'
    }
});
var linksSchema = new mongoose.Schema({
    userId: {
        type: String,
    }
});

var postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'user Id  can\'t be empty'
    },
    posttext: {
        type: String,
        required: 'post Id  can\'t be empty'
    },
    links:[linksSchema],
    likes : [likesSchema],
    dislikes : [dislikesSchema]
});


const Post = mongoose.model('Post', postSchema);
module.exports = Post ;
