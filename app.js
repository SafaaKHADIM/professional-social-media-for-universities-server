import './config/config';
import './models/db';
import config from './config'
import express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose'
const rtsIndex = require('./routes/admin');
const routerUser = require('./routes/user');


let app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());
//path
app.use('/api/admin', rtsIndex);
app.use('/api/user', routerUser);


//app.get('/favicon', (req, res) => res.status(204))
// app.get('/', function (req, res) {
//   res.render('index', {});
// });
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// mongoose.set('useCreateIndex', true);
var connect = mongoose.connect(config.mongourl, {
    useNewUrlParser: true,
    autoReconnect: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});
// require('./models/admin');

connect.then(() => {
    console.log('Connect correctly to the server !');

}, (err) => {console.log('Cannot connect correctly to the server !');console.log(`env is ${process.env.NODE_ENV}`);});
// require('./models/admin');
// start server
app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`));
