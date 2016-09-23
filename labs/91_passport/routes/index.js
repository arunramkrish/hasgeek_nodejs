/*var express = require('express');
var router = express.Router();

//GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quintype' });
});

module.exports = router;
*/
var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

function isAuthenticated(req, res, next) {

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.user) {
        return next();
    } else {
      // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
      res.redirect('/login');
    }
}

router.get('/', isAuthenticated, function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account, message : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;