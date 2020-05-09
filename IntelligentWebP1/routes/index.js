var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");


var happySharing = require('../controllers/HappySharing');
// var initDB= require('../controllers/init');
// initDB.init();


/* GET home page. */
router.get('/', function(req, res, next) {

  var username=req.session.username;
  console.log(username)
  res.render('index', { title: 'HappySharing',username:username});
});

router.post('/index', happySharing.insert);
//
// router.post('/index', happySharing.getUser);
router.get('/regist', function (req, res, next) {
  res.render('regist', {})
})


router.get('/login', function (req, res, next) {
  res.render('login', {})
})


module.exports = router;
