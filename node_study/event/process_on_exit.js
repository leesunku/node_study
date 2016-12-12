/*process.on('exit', function(){
	console.log('exit 발생');
});*/
process.on('exit', (code) => {
	console.log("About to exit with code: " + code);
});