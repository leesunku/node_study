/**
	cookie parser 미들웨어는 요청 쿠키를 추출하는 미들웨어이다.
 */

const http = require('http');
const express = require('express');
const cookie_parser = require('cookie-parser');

const router = express.Router();
const app = express();

app.use(cookie_parser());

app.get('/getCookie', (req, res) => {
	res.send(req.cookies)
})

app.get('/setCookie', (req, res) => {
	res.cookie('string', 'cookie');
	res.cookie('json', {
		name : 'cookie',
		age : 27
	})
	
	res.redirect('/getCookie')
})
app.use(router);

http.createServer(app).listen(23333, () => {
	console.log('server run')
})