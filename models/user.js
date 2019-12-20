const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const grade = require('./grade')

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    birthdate:{
      type: Date,
    },
    adresse: {
        type: String,

    },
    phone: {
        type: Number,
    },
    password: {
        type: String,

    },
    profilePicture: {
        type: String,
    },
    studentorprof:{
      type: String,
    },
  //  grade:[grade],
    saltSecret: String
});

//Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

//Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

const User = mongoose.model('User', userSchema);
module.exports = User ;
