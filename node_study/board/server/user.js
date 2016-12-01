var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	console.log('/user/');
	res.render('userList');
});
router.get('/get', function(req, res){
	console.log('/user/get');
	res.render('getUser');
});
module.exports = router;
