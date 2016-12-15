const http = require('http');
const express = require('express');

const app = express();

app.use( (req, res) => {
	 let agent = req.header('User-Agent')
	 console.log(req.header)
	 console.log(agent)
	 res.send(200)
})

http.createServer(app).listen(8082, ()=> {
	console.log('server run')
}).l