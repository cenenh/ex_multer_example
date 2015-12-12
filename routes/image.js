var express = require('express');
var multer = require('multer');
var router = express.Router();
var moment = require('moment');
var mime = require('mime');
var storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null,'./public/images');
  },
  filename: function(req, file, callback){
    var timestamp =  moment().format("x");
    var extension = mime.extension(file.mimetype);
    callback(null, file.fieldname + '-' + timestamp + "." + extension);
  }
});
var upload = multer({
  storage : storage
});

/* UPDATE profile page. */
router.post('/', upload.single('img'), function(req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.json({
    code: 200,
    data: req.body
  });
});

module.exports = router;
