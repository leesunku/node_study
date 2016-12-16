/**
	static 미들웨어는 웹 서버에서 손쉽게 파일을 제공하는 방법
	resource 폴더를 하나 만든다
	resource 폴더에는 그림파일, js 파일, css 파일등을 넣는다
 */

/*const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan());
app.use(express.static(__dirname + '/resource'));

http.createServer(app).listen(24442, ()=> {
	console.log('server on')
})*/

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan());
app.use(express.static(__dirname + '/resource'));
app.use( (req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<img src="/image.jpg" width="100%">');
})

http.createServer(app).listen(11112, ()=>{
	console.log('server on');
})