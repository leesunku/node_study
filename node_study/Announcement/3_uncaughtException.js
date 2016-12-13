// 종료 이벤트
process.on('exit', (code) => {
	console.log('종료 code = ' + code);	
});
// 예외처리 이벤트
process.on('uncaughtException', (error) => {
	console.log('예외 발생 = ' + error);
});

var count = 0;
// 2초마다 예외발생
var id = setInterval(() => {
	count++;
	
	if (count == 3){ clearInterval(id);}
	// 선언하지 않은 함수 호출
	error_run();
}, 2000);