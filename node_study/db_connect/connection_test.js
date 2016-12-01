var mysql = require('mysql');

var db = mysql.createConnection({
	host : 'mtmsmtms.cafe24.com',
	port : 3306,
	user : 'mtmsmtms',
	password : 'mtms2016',
	database : 'mtmsmtms'
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