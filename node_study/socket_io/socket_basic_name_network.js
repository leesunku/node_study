const http = require('http')
const fs = require('fs')
const socket_io = require('socket.io')

const server = http.createServer( (req, res) => {
	fs.readFile('htmlPage.html', (err, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.end(data)
	})
}).listen(10001, ()=>{
	console.log('server on')
})
const io = socket_io.listen(server)
let id

io.set('log level', 2)
io.sockets.on('connection', (soc) => {
	id = soc.id;
	console.log('id = ' + id)
	soc.on('client_server', (data) => {
		console.log('client data = ' + data)
		
		//soc.emit('server_client', data)
		
		// public
		//io.sockets.emit('server_client', data)
		
		// broadcat : 나 빼고 전부에게 전송   io.sockets 과 다르게 soc 객체 사용
		//soc.broadcast.emit('server_client', data)
		
		// private : 1대1 통신 구현된건 가장 마지막에 접속한 id 에게 전송
		io.sockets.sockets[id].emit('server_client', data);
	})
})