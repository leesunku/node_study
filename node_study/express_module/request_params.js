const http = require('http');
const express = require('express');

const app = express();

app.use( (req, res) => {
	const name = req.param('name');
	const age = req.param('age');
	
	res.send('<h1>' + name + ' = ' + age + '</h1>')
	
})

http.createServer(app).listen(9022, ()=> {
	console.log('server run')
})

//http://localhost:9022/?name=sk&age=27