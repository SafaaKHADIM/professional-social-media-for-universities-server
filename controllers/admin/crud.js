const mongoose = require('mongoose');

const Admin = mongoose.model('Admin');


//CREATE
module.exports.addAdmin = (req, res, next) => {
    
    var admin = new Admin();
    admin.fullName = req.body.fullName;
    admin.email = req.body.email;
    admin.phone = req.body.phone;
    admin.password = req.body.password;

    admin.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readAdmin = function (req, res) {
    Admin.findById(req.params.id, function (err, admin) {
        if (err) return next(err);
        res.send(admin);
    })
};

//Delete
module.exports.deleteAdmin = function (req, res) {
    Admin.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updateAdmin = function (req, res) {
    Admin.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, admin) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
