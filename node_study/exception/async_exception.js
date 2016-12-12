var fs = require('fs');
fs.readFile('fs_sync.txt', 'utf8', function(error, data){
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});

fs.writeFile('fs_sync.txt', 'hello', 'utf8', function(err){
	if (err) {
		console.log(err);
	} else {
		console.log('file write complete');
	}
});