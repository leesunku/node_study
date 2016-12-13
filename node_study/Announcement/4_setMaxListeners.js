// setMaxListeners(limit) : 이벤트 리스너 연결 개수를 조절

//process.setMaxListeners(15);

process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});

process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});
process.on('exit', ()=> {});

process.on('exit', ()=> {});

// node.js는 한 이벤트(exit)에 10개(10개초과)가 넘는 이벤트 리스너를 연결할 경우 이를 개발자 실수로 간주한다.
// 이벤트를 제약없이(무한개) 연결하고 싶다면, setMaxListeners(0)으로 설정