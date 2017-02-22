const http = require('http')
const fs = require('fs')
const socket_io = require('socket.io')
const content_type = {
	'Content-Type' : 'text/html'
}
const server = http.createServer( (req, res) => {
	fs.readFile('room.html', 'utf8', (err, data) => {
		res.writeHead(200, content_type)
		res.end(data)
	})
}).listen(10004, ()=>{
	console.log('server on')
})
const io = socket_io.listen(server)


io.sockets.on('connection', (soc) =>{
	soc.on('message', (data) => {
		io.sockets.emit('message', data)
	})
})