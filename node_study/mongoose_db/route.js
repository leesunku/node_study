const express = require('express');
const router = express.Router();
const User = require('./user.js');
router.get('/', function(req, res){
	res.render('main');
})
router.get('about', function(req, res){
	res.render('about');
})
router.get('/:name', function(req, res){
	User.find({name : req.params.name}, function(err, user){
		res.render('main', {user:user});
	});
})
module.exports = router;
