const http = require('http');
const express = require('express');

const app = express();

app.use( (req, res) => {
	let output = [];
	for (let i = 0; i < 3; i++) {
		output.push({
			count : i,
			name : 'name - ' + i
		})
	}
	res.send(200, output)
})

http.createServer(app).listen(4949, () => {
	console.log('server run');
})