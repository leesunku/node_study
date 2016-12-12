var fs = require('fs');

fs.readFile('fs.txt', 'utf-8', function(error, data){
	console.log(data);
});