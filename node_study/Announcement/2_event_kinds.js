process.on('exit', (code) => {
	console.log("종료 = " + code);
});
// 프로그램 종료시, 발생하는 이벤트

process.on('uncaughtException', (error) => {
	console.log("예외 발생  = " + error);
});
// 예외 발생시, 발생하는 이벤트

