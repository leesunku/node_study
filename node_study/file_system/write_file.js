var fs = require('fs');

var data = 'hello world';

fs.writeFile('write.txt', data, 'utf8', function(error){
	console.log('write file async complete');
});

fs.writeFileSync('write_sync.txt', data, 'utf8');
console.log('write file sync complete');

