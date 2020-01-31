var express = require('express');
var router = express.Router();
var studentModel = require('../modules/student');
var student=studentModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var studentDetails = new studentModel({
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,

    
  });

  studentDetails.save(function(err,req1){
    if(err) throw err;
    student.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Item Records', records:data, success:'Record Inserted Successfully' });
        });
  })
  
  
});

module.exports = router;
