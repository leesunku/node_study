// node.js가 이벤트 기반이라는데, 정확하게 어떤 부분이지?

// 파일쓰기 예제
const fs = require('fs');

//...
const contents = fs.readFile('hello.txt', 'utf-8', (err, contents) => {
	console.log('read 1 : ' + contents);
});
//...

// 위 코드는 fs.txt 라는 파일을 읽는 코드이다. 맨 뒤에 (err, contents)라는 함수를 정의했다. 이 함수는 파일을 다 읽었을 때, 호출되는 콜백함수이다. fs.readFile을 호출하면, 
//node는 파일이 다 읽을 때까지 이 코드에서 block되어 있는 것이 아니라 다음 코드로 진행을 한다음, 파일을 다 읽으면 이벤트를 발생시켜서 여기에 연결된 (err, contents)를 수행하는 것이다.


//node.js를 공부하다보면, 가장 큰 진입장벽중의 하나가, javascript나 node.js의 라이브러리를 새롭게 배우는 것보다, 기존의 procedural programming model에서 이러한 event driven programming의 개념을 익히는 것이 더 어렵다.
//출처 : http://bcho.tistory.com/885