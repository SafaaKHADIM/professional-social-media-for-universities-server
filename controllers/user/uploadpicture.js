var multer = require('multer');



//upload files to the server using multer ;)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' +file.originalname)
  }
});

var upload = multer({ storage: storage }).single('image');

module.exports.upload =(req, res) =>
 {
  upload(req, res, function (err) {
    if (err ) {
      // A Multer error occurred when uploading.
        res.send(err);
    }
    // Everything went fine.
    console.log(req.file);
    res.setHeader('Content-Type', 'application/json');
    res.json(req.file);    
  })
}
