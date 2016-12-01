var tcp = require("net");
var server = tcp.createServer();
server.addListener("connection", function(con){
	con.write("hello");
	con.end();
})
server.listen(10101);