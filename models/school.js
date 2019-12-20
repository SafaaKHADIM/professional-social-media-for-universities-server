const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



var schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'user Id  can\'t be empty'
    },
    country: {
        type: String,
    },
    phone: {
        type: Number,
    },
    information: {
        type: String,
    },
    speciality: {
        type: String,
    },
    picture:{
      type: String,
    }


});


const School = mongoose.model('School', schoolSchema);
module.exports = School ;
