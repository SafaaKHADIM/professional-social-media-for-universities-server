const mongoose = require('mongoose');

const Grade = mongoose.model('Grade');


//CREATE
module.exports.addGrade = (req, res, next) => {
    var grade = new Grade();
    grade.schoolId = req.body.schoolId;
    grade.option = req.body.option;
    grade.class = req.body.class;
    grade.degreetype = req.body.degreetype;

    grade.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            res.send(err);
        }
    });
}

//READ
module.exports.readGrade= function (req, res) {
    Grade.findById(req.params.id, function (err, grade) {
        if (err) return next(err);
        res.send(grade);
    })
};

//Delete
module.exports.deleteGrade= function (req, res) {
    Grade.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//UPDATE
module.exports.updateGrade= function (req, res) {
    Grade.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, grade) {
        if (err) return next(err);
        res.send('Udpated successfully!');
    });
};
