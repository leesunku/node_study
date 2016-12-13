/*

node.js에서 가장 특징적인 부분 - 이벤트 기반 비동기 프로그래밍

*/



// 기존 웹 브라우저에서 작동하는 자바스크립트로 window 객체에 load 이벤트 연결
window.addEventListener('load', function() {});

// 자바스크립트의 표준 이벤트 연결 메서드
process.addEventListener('eventName', function(){});

// 노드의 이벤트 메서드
process.on('eventName', function(){});