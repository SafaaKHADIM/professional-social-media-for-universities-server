// import mongoose  from 'mongoose';

// var connect = mongoose.connect("mongodb://localhost:27017/socialmedia", {
//     useNewUrlParser: true,
//     autoReconnect: true,
//     useUnifiedTopology:true,
//     useCreateIndex: true,
// });
require('./admin');
require('./comment');
require('./customizedGroup');
require('./grade');
require('./post');
require('./school');
require('./user');
