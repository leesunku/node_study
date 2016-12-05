const express = require('express');
const path = require('path');
const app = express();
const db = require('./db.js');
const route = require('./route.js');
app.set('view engine', 'pug');
app.set('view', path.join(__dirname, 'html'));
db();
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
app.listen(10011, function(){
	console.log('Express App on port 8080!');
});