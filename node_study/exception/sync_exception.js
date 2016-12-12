var fs = require('fs');
try {
	var data = fs.readFileSync('fs.txt', 'utf-8');
	console.log(data);
} catch (e) {
	console.log(e);
}
try {
	fs.writeFileSync('fs.txt', 'hello, sk~', 'utf8');
	console.log('file write complete');
} catch (e) {
	console.log(e);
}