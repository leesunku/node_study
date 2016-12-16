/**
	express 모듈은 request 이벤트 리스너를 연결하는데 use() 메서드를 사용한다.
	use() 메서드는 여러 번 사용할 수 있다.
 */

/*
const http = require('http');
const express = require('express');

const app = express();
app.use(express.logger());
app.use( (req, res, next) => {
	req.number = 52;
	res.number = 273;
	console.log('첫 번째 미들웨어');
	next();
});

app.use( (req,res, next) => {
	console.log('두 번째 미들웨어');
	res.send('<h1>' + req.number + ' : ' + res.number + '</h1>');
})

http.createServer(app).listen(5525, ()=>{
	console.log('server on');
});
*/
/*
 오마이갓 익스4부터는 로거를 지원 안한다네...
npm install 로 express를 받으면 지금 4.14.0 버전이 받아지는거 같음, 
node-module/express/lib/express.js 로 가면 js 맨 아래에, 
더 이상 express에서 지원 하지 않고, 따로 분리해서 받아야 한다고 익셉션을 날려주네, 아래 미들웨어를 사용하면,
[
  'json',
  'urlencoded',
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'csrf',
  'directory',
  'limit',
  'multipart',
  'staticCache',
]
그래서 logger를 대신할 모듈 morgan에 대해 공부합니다.
먼저, 모르간 하니까, 드모르간이 생각나네... 별 상관 없겠지
npm install morgan --save

const morgan = require('morgan');
//skip 로깅의 스킵여부를 결정하기 위한 함수. 기본값은 false
morgan('combined', {
	skip : (req, res) => { return res.statusCode < 400 }
})

*/
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();

router.get('/logger', (req, res) => {
	console.log('access logging');
	res.writeHead(404, {'Content-Type' : 'text/html'});
	res.end('error!!');
});

router.get('/skip', (req, res) => {
	console.log('access skip');
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('success!!');
});

const myMorgan = morgan('combined', {
	skip : (req, res) => {return res.statusCode < 400}
})

app.use(myMorgan);
app.use('/', router);
http.createServer(app).listen(24223, ()=>{
	console.log('server start!!')
})