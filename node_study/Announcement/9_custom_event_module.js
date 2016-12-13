// 내가 만든 이벤트 모듈
const event = require('events');
const cem = new event.EventEmitter;
cem.on('cem', () => {
	console.log("cem 모듈의 이벤트 발생");	
});
cem.emit('cem');