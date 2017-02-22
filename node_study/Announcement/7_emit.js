// emit : 이벤트 강제 발생

/*process.on('exit', () => {
	console.log("bye~");
});
process.emit('exit');
console.log('아직은 프로그램이 실행중이다~');
process.emit('exit');
console.log('아직은 프로그램이 실행중이다~');
process.emit('exit');
console.log('아직은 프로그램이 실행중이다~');
process.emit('exit');
console.log('아직은 프로그램이 실행중이다~');
process.emit('exit');

console.log('아직은 프로그램이 실행중이다~');
console.log('아직은 프로그램이 실행중이다~');
console.log('아직은 프로그램이 실행중이다~');
console.log('아직은 프로그램이 실행중이다~');
console.log('아직은 프로그램이 실행중이다~');*/

// 강제로 이벤트를 호출할 뿐이지, 실제로는 프로그램이 종료되는것은 아니다.

// 실제로 종료하려면?

console.log('*************  아직은 프로그램이 실행중이다~');
console.log('*************  아직은 프로그램이 실행중이다~');

process.exit();

console.log('*************  아직은 프로그램이 실행중이다~');
console.log('*************  아직은 프로그램이 실행중이다~');
