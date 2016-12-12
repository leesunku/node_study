process.on('exit', (code) => {
	console.log('종료 code = ' + code);	
});

process.on('uncaughtException', (error) => {
	console.log('예외 발생 = ' + error);
});

var count = 0;
var id = setInterval(() => {
	count++;
	
	if (count == 3){ clearInterval(id);}
	console.log(count);
	error_run();
}, 2000);