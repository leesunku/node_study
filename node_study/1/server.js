var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<h1>Hello</h1>');
}).listen(8090, function(){
	console.log("server on!");
});

