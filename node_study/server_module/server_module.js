/**
	서버 실행 모듈로 바로 실해 가능함 모듈
	npm install -g supervisor --save
	npm install -g forever --save
	npm install -g express@3.4.7 --save
	
	supervisor 를 이클립스에서 실행 하려면
	console 창을 커멘드 창처럼 만들어준다.
	Run > External Tools > External Tools Configurations
	 */

var http = require('http');

http.createServer( (req, res) => {
	res.writeHead(200, {'Content' : 'text/html'});
	res.end('<h1> title-file-1 문자열 변경 </h1>');
}).listen(9999, () => {
	console.log('server run');
});



/*

Program 에 새로운 실행 환경 추가 
	Name = 자유(ex: comand)
	Location = ${env_var:COMSPEC}
	Working Directory = ${project_loc}
	
출처 : http://aberration.tistory.com/entry/eclipse%EC%97%90%EC%84%9C-%EC%BD%98%EC%86%94%EC%B0%BD%EC%9D%84-%ED%84%B0%EB%AF%B8%EB%84%90cmd%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

*/