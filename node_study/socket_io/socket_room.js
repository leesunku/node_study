/**

socket.join() : 클라이언트를 방에 집어넣습니다.
io.sockets.in() 특정 방에 있는 클라이언트를 추출합니다.

 */

const http = require('http')
const fs = require('fs')
const socket_io = require('socket.io')
const content_type = {
	'Content-Type' : 'text/html'
}
const server = http.createServer( (req, res) => {
	fs.readFile('room.html', 'utf8', (err, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.end(data)
	})
}).listen(10001, ()=>{
	console.log('server on')
})
const io = socket_io.listen(server)


io.sockets.on('connection', (soc) =>{
	soc.on('join', (data) => {
		soc.join(data)
		soc.room = data;
	})
	
	soc.on('message', (data) => {
		io.sockets.in(soc.room).emit('message', data)
	})
	
})