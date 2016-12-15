/**
 * http://usejsdoc.org/
 */

const http = require('http');
const express = require('express');

const app = express();

app.use( (req, res) => {
	res.writeHead(200, { 'Content-Type' : 'text/html'});
	res.end('<h1> hello express</h1>');
});

http.createServer(app).listen(4949, () => {
	console.log('server run')
})
