var express = require('express');
var router = express.Router();
var bodyParser= require("body-parser");


var happySharing = require('../controllers/HappySharing');
// var initDB= require('../controllers/init');
// initDB.init();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HappySharing' });
});

router.post('/index', happySharing.insert);
//
// router.post('/index', happySharing.getUser);

module.exports = router;
