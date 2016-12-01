var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	res.render('boardList');
});
router.get('/get', function(req, res){
	res.render('getBoard');
});
module.exports = router;
