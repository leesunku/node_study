const http = require('http')
const express = require('express')
const session = require('express-session')
const router = express.Router()
const app = express();
/*
secret : 쿠키를 임의로 변조 하는것을 방지하기 위한 값, 세션을 암호화 하여 저장
resave : 세션을 언제나 저장할 지 정하는 값
saveUninitialized : 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장

*/
app.use(session({
	secret : '@#@$MYSIGN#@$#$',
	resave : false,
	saveUninitialized : true
}))

app.get('/', (req, res) => {
	var output = {}
	console.log("req.session.cookie = " + req.session.cookie)
	console.log("req.session = " + req.session)
	output.cookie = req.session.cookie
	output.session = req.session
	
	req.session.now = (new Date()).toUTCString();
	res.send(output);
})

/*app.get('/', (req, res) => {
	
})
*/
http.createServer(app).listen(9999, () => {
	console.log('server on')
})