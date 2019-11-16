const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');


//CREATE
module.exports.addComment = (req, res, next) => {
    var comment = new Comment();
    comment.userId = req.body.userId;
    comment.postId = req.body.postId;
    comment.commentText = req.body.commentText;
    comment.commentprecedent = req.body.commentprecedent;

    comment.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readComment = function (req, res) {
    Comment.findById(req.params.id, function (err, comment) {
        if (err) return next(err);
        res.send(comment);
    })
};

//Delete
module.exports.deleteComment= function (req, res) {
    Comment.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updateComment= function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
