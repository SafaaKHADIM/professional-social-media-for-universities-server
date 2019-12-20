const mongoose = require('mongoose');

const Post = mongoose.model('Post');


//CREATE
module.exports.addPost = (req, res, next) => {
    var post = new Post();
    post.userId = req.body.userId;
    post.posttext = req.body.posttext;


    post.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readPost= function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};

//Delete
module.exports.deletePost= function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updatePost= function (req, res) {
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, post) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
