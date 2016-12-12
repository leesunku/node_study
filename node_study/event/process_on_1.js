//process 객체에 exit 이벤트를 연결합니다.
/*process.addEventListener('exit', function(){
	
});*/
process.on('exit', function(){
	console.log('exit 발생');
});