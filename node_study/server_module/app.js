/*
	command에 forever start app.js 실행
	
	forever list : 실행중인 서버 보기
	forever stop 0 : 실행중인 서버 종료 0번째
*/

require('http').createServer( (req, res) => {
	if ( req.url == '/') {
		res.write('<html>');
			res.write('<head>');
				res.write('<title> forever </title>');
			res.write('</head>');
			res.write('<body>');
				res.write('<h1> forever </h1>');
			res.write('</body>');
		res.write('</html>');
	} else {
		console.log('err');
	}
}).listen(10102, () => {
	console.log('server run');
});

