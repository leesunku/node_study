const fs = require('fs')
const http = require('http')
const express = require('express')
const fileUpload = require('express-fileupload')
const router = express.Router()
const app = express()

app.use(fileUpload())

app.get('/', (req, res) => {
	fs.readFile('htmlPage.html', (err, data) => {
		res.send(data.toString())
	})
})
app.post('/', (req, res) => {
	console.log('body = ' + req.body)
	console.log('files = ' + req.files)
	let file = req.files.uploadFile;
	if (!req.files) {
		res.send('No files were uploaded')
		return
	}
	let path = '/files/'+ Date.now() + '_' + file.name;
	console.log(path);
	file.mv(__dirname + path, (err)=> {
		if (err) {
			console.log(err);
		}
	})
	res.redirect('/')
})

http.createServer(app).listen(9901, ()=> {
	console.log('server on')
})