/**
	router 미들웨어는 페이지 라우팅을 구현하는 미들웨어입니다. 
	페이지 라우팅은 클라이언트 요청에 적절한 페이지를 제공하는 기술입니다.
	router 미들웨어를 사용하면
	app 객체를
	get
	post
	put
	del
	all - 모든 요청이 발생했을 때의 이벤트 리스너
	를 지원한다.
 */

/*const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan());
app.use(app.router);
app.use(express.static(__dirname + '/webapp'));

app.get('/index', (req, res) => {
	res.send('<a href="/content"> Go to content </a>');
})
app.get('/content', (req, res) => {
	res.send('<a href="/index"> Go to content </a>')
})
http.createServer(app).listen(22334, ()=>{
	console.log('server run');
})
*/
/*
	가 아니라...
	아놔, app.router 를  deprecated 한다네?...
		const router = express.Router();
		요딴식으로 써줘야 된다.
*/

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const router = express.Router();

const app = express();

/*app.use(express.static(__dirname + '/webapp'));*/

app.get('/index', (req, res) => {
	res.send('<a href="/content"> Go to content </a>');
})
app.get('/content', (req, res) => {
	res.send('<a href="/index"> Go to index </a>')
})

app.use(morgan());
app.use(router);

http.createServer(app).listen(22334, ()=>{
	console.log('server run');
})
