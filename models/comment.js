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

var commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'user Id  can\'t be empty'
    },
    postId: {
        type: String,
        required: 'post Id  can\'t be empty'
    },
    commentText: {
        type: String,
        required: 'comment Text can\'t be empty'
    },
    commentprecedent: {
        type: String,
    },
    likes : [likesSchema],
    dislikes : [dislikesSchema]
});


const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment ;
