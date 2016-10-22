var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Game = require('../models/game');
var router = express.Router();


router.get('/', function (req, res) {

  Game.find({}, function(err, entries) {
    console.log(err, entries, entries.length);
    res.render('index', {
      user : req.user,
      entries: entries
    });
  });
});

router.post('/entries', function(req, res, next) {
  var newGame = Game(res.payload);

  newGame.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Game record created!');
    }
  });

});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res, next) {
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
