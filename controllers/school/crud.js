const mongoose = require('mongoose');

const School = mongoose.model('School');


//CREATE
module.exports.addSchool = (req, res, next) => {
    var school = new School();
    school.name = req.body.name;
    school.country = req.body.country;
    school.phone = req.body.phone;
    school.information = req.body.information;
    school.speciality = req.body.speciality;
    school.picture = req.body.picture;
    school.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readSchool= function (req, res) {
    School.findById(req.params.id, function (err, school) {
        if (err) return next(err);
        res.send(school);
    })
};

//Delete
module.exports.deleteSchool= function (req, res) {
    School.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updateSchool= function (req, res) {
    School.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, school) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
