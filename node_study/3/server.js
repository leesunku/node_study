
var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(req, res) {
		var postData = "";
		var pathname = url.parse(req.url).pathname;
		console.log("Req for " + pathname + " received");
		req.setEncoding("utf8");
		req.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});
		req.addListener("end", function(){
			route(handle, pathname, res, postData);			
		})
		
	}
	http.createServer(onRequest).listen(10000);
	console.log("Server has started");
}
exports.start = start;

/*var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Req for " + pathname + " received");
		route(handle, pathname, res);
		
	}
	http.createServer(onRequest).listen(10000);
	console.log("Server has started");
}
exports.start = start;

*/
/*var http = require("http");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"}); +
	res.write("Hello world");
	res.end();
}).listen(8888);
*/

/*var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Req for " + pathname + " received");
		route(handle, pathname);
		route(pathname);
		console.log("Request Received");
		res.writeHead(200, {"Content-Type" : "text/plain"});
		var content = route(handle, pathname);
		res.write(content);
		res.end();
	}
	http.createServer(onRequest).listen(10000);
	console.log("Server has started");
}
exports.start = start;*/
