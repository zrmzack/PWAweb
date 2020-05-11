var express = require('express');
var router = express.Router();
var happySharing = require('../controllers/HappySharing');
var usermodel=require('../models/userData')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/login', function (req, res, next) {
  var data = {
    username: req.body.username,
    password: req.body.password
  }
  usermodel.connect(function (db) {
    db.collection('user').find(data).toArray(function (err, docs) {
      if (err) {
        res.redirect('/login')
      } else {
        if (docs.length > 0) {
          //login success
          req.session.username = data.username
          console.log( req.session.username)
          res.redirect('/')
        } else {
          res.redirect('/login')
        }
      }
    })
  })
  // console.log('login information', data)
})


router.post('/regist',function (req,res,next) {
  var data={
     username:req.body.username,
     password:req.body.password,
  }
  usermodel.connect(function (db) {
    db.collection('user').insertOne(data,function (err,ret) {
      if (err){
        // alert('regist wrong')
        res.redirect('/regist')
        res.redirect('/regist')
      }
      else {
        // alert(data);
        res.redirect('/login')
      }
    })
  })

})



module.exports = router;
