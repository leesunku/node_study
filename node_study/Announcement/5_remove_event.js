// 이벤트에 사용할 함수 선언
const onUncaughtException = (err) => {
	console.log("예외 발생 = " + err);
}
// 이벤트 선언
process.on('uncaughtException', onUncaughtException);

// 이벤트 제거
//process.removeListener('uncaughtException', onUncaughtException);

setInterval(() => {
	error_run();
}, 200);