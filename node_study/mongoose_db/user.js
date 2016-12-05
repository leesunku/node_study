const mongoose = require('mongose');
const userSchema = new mongoose.Schma({
	name : String,
	data : Object,
});
module.exports = mongoose.model('User', userSchema);