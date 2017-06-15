var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});


router.get('/dubbing2',function(Req,res,next){
  res.render('dubbing2.ejs');
})

/* GET dom listing. */
router.get('/dom', function(req, res, next) {
  res.render('dom.html');
});


router.get('/dom_second',function(req,res,next){
  res.render('dom_second.ejs');
});


router.get('/dom_third',function(req,res,next){
  res.render('dom_third.ejs');
});

router.get('/dom_fourth',function(req,res,next){
  res.render('dom_fourth.ejs');
})

/* GET  play home page. */
router.get('/play', function(req, res, next) {
  res.render('play.ejs');
});


router.get('/play_second',function(req,res,next){
  res.render('play_second.ejs');
});

router.get('/play_third',function(req,res,next){
  res.render('play_third.ejs');
});

router.get('/play_fourth',function(req,res,next){
  res.render('play_fourth.ejs');
});

router.get('/play_5th',function(req,res,next){
  res.render('play_5th.ejs');
});


module.exports = router;
