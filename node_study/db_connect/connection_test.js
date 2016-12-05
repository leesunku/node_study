var mysql = require('mysql');

var db = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'cc',
	password : 'aa',
	database : 'bb'
});
db.connect(function(err){
	if (err) {
		console.error('mysql connection error');
		console.error(err);
		throw err;
	}
})
var query = db.query('select * from user', function(err,rows){
	console.log("rows = " + rows);
});
console.log("query = " + query);