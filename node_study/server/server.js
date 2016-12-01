var http = require('http');
http.createServer(function(req, res){
	req.on('error', function(err){
		console.log(err);
		
	}).on('data', function(data){
		console.log(data);
	}).on('end', function(){
		res.on('error', function(err){
			console.log(err);
		});
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.write('hi\n');
		res.end(function(){
			console.log('the end!');
		});
	});
}).listen(10010);