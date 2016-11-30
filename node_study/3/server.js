/*var http = require("http");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"}); +
	res.write("Hello world");
	res.end();
}).listen(8888);
*/

var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Req for " + pathname + " received");
		route(handle, pathname);
		/*route(pathname);*/
		console.log("Request Received");
		res.writeHead(200, {"Content-Type" : "text/plain"});
		var content = route(handle, pathname);
		res.write(content);
		res.end();
	}
	http.createServer(onRequest).listen(8899);
	console.log("Server has started");
}
exports.start = start;