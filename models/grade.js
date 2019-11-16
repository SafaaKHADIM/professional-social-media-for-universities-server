const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var gradeSchema = new mongoose.Schema({
    schoolId: {
        type: String,
        required: 'school Id  can\'t be empty'
    },
    option: {
        type: String,
        required: 'option can\'t be empty'
    },
    class: {
        type: String,
        required: 'class Text can\'t be empty'
    },
    degreetype: {
        type: String,
        required: 'degreetype Text can\'t be empty'
    }
});


const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade ;
