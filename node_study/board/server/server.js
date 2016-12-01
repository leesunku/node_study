var express = require('express');
var path = require('path');
var app = express();
var user = require('./user.js');
/*var board = require('./board.js');*/
var port_number = 10012;
var server_start = function(){
	console.log('server start - port number : ' + port_number);
};
/*console.log("static(path.join(__dirname, 'html')) = " + path.join(__dirname));
console.log("__dirname = " + __dirname);
console.log("express.static(path.join(__dirname, 'html')) = " + express.static(path.join(__dirname, 'html')));*/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '..', 'client', 'view', 'user'));
// dirname 은 현재 경로, ..는 경로 후진, 결국 board/client/view/user 의 pug 를 불러옴
app.use(express.static(path.join(__dirname, '..', 'client', 'view', 'user')));
app.use('/user', user);
/*app.use('/board', board);*/
app.listen(port_number, server_start());


