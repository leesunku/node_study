var express = 
	require('express');
var path =
	require('path');
var router = 
	express.Router();
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
router.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
module.exports = router;