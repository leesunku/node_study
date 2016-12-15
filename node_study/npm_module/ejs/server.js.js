const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const port_number = 8088;
const port_number_2 = 8089;
http.createServer( (req, res) => {
	fs.readFile('ejsPage.ejs', 'utf8', (error, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(ejs.render(data));
	});
}).listen(port_number, () => {
	console.log('server run');
});

http.createServer( (req, res) => {
	fs.readFile('ejsPage_2.ejs', 'utf8', (error, data) => {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(ejs.render(data, {
			name : 'dev',
			age : '27'
		}));
	});
}).listen(port_number_2, () => {
	console.log('server run, port number = ' + port_number_2);
});