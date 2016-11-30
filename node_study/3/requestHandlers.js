

function start(res){
	console.log("Request handler 'start' was called");
	
	var body = '<html> ' + '<head>' +
		'<meta charset="utf-8" http-equiv="Content-Type" content="text/html"/>' +
		'</head>' + '<body' +
		'이름을 입력하세요.' + '<br>' +
		'<form action="/hello" method = "post">' +
		'<input type = "text" name="text"></input>' +
		'<input type = "submit" value = "입력" />' +
		'</form>' + '</body>' + '</html>';
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write(body);
	res.end();
		
	
	
	
/*	setTimeout(function(){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write("Hello Start");
		res.end();
	}, 10000);*/
}
var querystring = require("querystring");
function hello(res, postData){
	console.log("Request handler 'hello' was called.");
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("안녕하세요. " + querystring.parse(postData).text + "님");
	res.end();
}
exports.start = start;
exports.hello = hello;


/*function start() {
	console.log("Request handler 'start' was called");
	
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	return "Hello Start";
}*/