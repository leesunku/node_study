/**
	body parser 미들웨어는 post 요청 데이터를 추출하는 미들웨어입니다.
 */

const fs = require('fs');
const jade = require('jade');
const http = require('http');
const bp = require('body-parser');
const express = require('express');
const cp = require('cookie-parser');

const router = express.Router();
const app = express();

app.set('veiw engine', 'pug');
app.use(cp());
app.use(bp.urlencoded({ extended: false }))
//app.use(bp());

app.get('/', (req, res)=> {
	if (req.cookies.auth) 
		res.send('<h1> Login Success</h1>')
	else
		res.redirect('/login')
});
app.get('/login', (req, res) => { 
	fs.readFile(__dirname + '/webapp/' + 'login.jade', 'utf8', (err, data) => {
		const fn = jade.compile(data);
		res.send(fn());
	})
})

app.post('/login', (req, res) => {
	let login = req.param('login')
	let password = req.param('password')
	
	console.log(login, password);
	console.log(req.body);
	
	if (login == 'devlee' && password == '1234'){
		res.cookie('auth', true)
		res.redirect('/')
	} else
		res.redirect('/login')
})

app.use(router);

http.createServer(app).listen(23232, () => {
	console.log('server run')
})

