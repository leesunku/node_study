const http = require('http')
const fs = require('fs')
const socket_io = require('socket.io')
const content_type = {
	'Content-Type' : 'text/html'
}
const server = http.createServer( (req, res) => {
	fs.readFile('getName.html', 'utf8', (err, data) => {
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.end(data)
	})
}).listen(10001, ()=>{
	console.log('server on')
})
const io = socket_io.listen(server)

io.sockets.on('connection', (soc) => {
	soc.on('setName', (data) => {
		console.log(data)
		// 아 열받아 set, get은 없어졌다고 한다. 교재 맘에 안들어 ㅠㅠ
		//soc.set('name', data);
		// 그냥 소켓 오브젝트에 직접 쓰면됨		
		soc.name = data
	})
	
	soc.on('getName', () => {
		soc.emit('responseName', soc.name)
		/*soc.get('name', (err, data)=> {
			soc.emit('responseName', data)
		})*/
	})
})