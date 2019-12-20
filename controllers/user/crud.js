const mongoose = require('mongoose');

const User = mongoose.model('School');


//CREATE
module.exports.addUser = (req, res, next) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.birthdate = req.body.birthdate;
    user.adresse = req.body.adresse;
    user.phone = req.body.phone;
    user.password = req.body.password;
    user.studentorprof = req.body.studentorprof;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readUser= function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

//Delete
module.exports.deleteUser= function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updateUser= function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
