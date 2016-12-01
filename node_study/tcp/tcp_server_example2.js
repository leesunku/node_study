var tcp = require("net");
tcp.createServer(function(c){
	c.write("hello!\n");
	c.end();
}).listen(10102);