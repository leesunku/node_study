const mongoose = require('mongoose');
module.exports = function(){
	function connect(){
		mongoose.connect('localhost:27017', function(err){
			console.log('mongodb connected');
			if (err) {
				console.error('mongdb connection error ', err);
			}
		});
	};
	connect();
	mongoose.connection.on('disconnected', connect);
	require('./user.js');
};
