var express = require('express');
var router = express.Router();
var dotenv = require('dotenv');
dotenv.load();
var db = require('monk')(process.env.MONGOLAB_URI);
var progLangs = db.get('prog-langs');

/* INDEX of proglangs */
router.get('/', function(req, res, next) {
  progLangs.find({}).then(function (proglangs) {
    res.render('index', {
      title: "Programming Languages Listing",
      langs: progLangs
    });
    //res.json({ langs: proglangs });
  });
});

// display the form for adding a NEW progLang
router.get('/new', function(req, res, next) {
  res.render('new');
});

/* READ */
router.get('/:id', function(req, res, next) {
  progLangs.findOne({_id: req.params.id}).then(function (oneProgLang) {
    res.render('show', {info: oneProgLang});
    //res.json({ language: oneProgLang });
  });
});

// UPDATE
router.get('/:id/edit', function (req, res, next) {
  progLangs.findOne({_id: req.body.id}).then(function (info) {
    res.render('new', {
      title: edit,
      formFiller: info
    });
  });
});

// UPDATE
router.post('/:id', function(req, res, next) {
  progLangs.updateById( req.body.id, {
    runtimeEnvironment: req.body.runtimeEnv,
    family: req.body.family,
    comments: req.body.comments
  }).then(function (_) {
    res.redirect('/proglang');
  });
});

/* get for DELETE a resource */
router.post('/:id/remove', function(req, res, next) {
  progLangs.remove({ _id: req.params.id }).then(function () {
    res.redirect('/proglang');
  });
});

/* post for CREATE a resource*/
router.post('/new', function(req, res, next) {
  progLangs.insert({
    runtimeEnvironment: req.body.runtimeEnv,
    family: req.body.family,
    comments: req.body.comments
  }).then(function (_) {
    res.redirect('/proglang');
  });
});

module.exports = router;
