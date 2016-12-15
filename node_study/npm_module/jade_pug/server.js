const http = require('http');
const fs = require('fs');
const jade = require('jade');
const port_number = 9999;

http.createServer( (req, res) => {
	fs.readFile('jadePage.jade', 'utf8', (err, data) => {
		const fn = jade.compile(data);
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(fn());
	});
}).listen(port_number, () => {
	console.log('port = ' + port_number);
});

http.createServer( (req, res) => {
	fs.readFile('jadePage_2.jade', 'utf8', (err, data) => {
		const fn = jade.compile(data);
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(fn());
	});
}).listen(8889, () => {
	console.log('port = ' + 8889);
});

http.createServer( (req, res) => {
	fs.readFile('jadePage_3.jade', 'utf8', (err, data) => {
		const fn = jade.compile(data);
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(fn(
			{
				name : 'devlee',
				age : 27
			}	
		));
	});
}).listen(8883, () => {
	console.log('port = ' + 8883);
});