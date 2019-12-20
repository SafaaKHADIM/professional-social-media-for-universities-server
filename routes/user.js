const express = require('express');
const router = express.Router();
const uploads= require('../controllers/user/uploadpicture');



router.post('/upload',uploads.upload);





module.exports = router;
