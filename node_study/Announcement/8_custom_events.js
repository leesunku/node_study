/**
 * node.js에서 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체를 상속 받는다.
 * 그래서, 이벤트를 연결할 수 있다.
 * EventEmitter 객체로 새로운 이벤트를 만들어 보자.
 * 
 * process = EventEmitter 객체를 상속 받아 이벤트 연결 됨
 * EventEmitter 객체에는 아래와 같은 메서드가 존재한다.
 * 지금까지 설명했던것들
 * 
 * 	EventEmitter
 * 		addEventListener
 * 		on
 * 		setMaxListeners
 * 		removeListener
 * 		removeAllListeners
 * 		once
 * 
 */

const custom_events = new process.EventEmitter();

custom_events.on('custom_event', function (){
	console.log("내가 만든 이벤트가 발동!!!");
});

process.on('exit', function (){
	console.log("프로그램 종료");
});

setInterval(function () {
	custom_events.emit('custom_event');
}, 1000);


//DeprecationWarning : 지원중단 경고

// suggest 1
/*

const events = require('events');
const util = require('util');
// 객체 생성
const Custom_Event = function() {
    events.EventEmitter.call(this);
}
// 클래스 상속 : util 모듈의 inherits 메서드는 클래스를 상속 받게 한다.
util.inherits(Custom_Event,events.EventEmitter);

const print_event = () => {
	console.log("이벤트 발생");
}

const custom_event = new events.EventEmitter;
custom_event.on('cus_eve', print_event);
custom_event.emit('cus_eve');

*/



//suggest 2
/*

const events = require('events')

const custom_event = new events.EventEmitter;

custom_event.on('cus_eve', () => {
	console.log("이벤트 발생!!!!");
})
custom_event.emit('cus_eve');

*/
