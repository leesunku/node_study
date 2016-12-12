var fs = require('fs');

var text = fs.readFileSync('fs.txt', 'utf8');
console.log(text);