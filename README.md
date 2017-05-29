### node.js. study start!!!


#### 2016.11.30 - start
#### 2016.11.30 - hello, server, route, hanler
#### 2016.12.01 - mysql connect, restful, route2, express, pug
#### 2016.12.13 - event announcement
#### 2016.12.16 - express modules / middleware / parser / static / router / etc ...
#### 2016.12.18 - express framework / socket.io



2017-05-29 node remind


노드 특징
 - 구글의 크롬 V8 js 엔진 기반, 고성능 네트워크 서버
 - 싱글 스레드 기반, 이벤트 루프 기반한다.
 - File, Network 등에 대해 비동기 IO 처리하는 서버 미들웨어

 - 비동기 프로그래밍 : async/await 함수 promise.all{}
 - ECMAScript 2015 : 클래스, 화살표 함수, 블록 단위 변수 스코프, 상수, 템

플릿 문자열

노드의 인기도 상승
 - Html5 등으로 인해 자바스크립트의 비중이 높아짐
 - 기존의 프론트앤드 개발자가 진입 장벽이 높았던 백엔드 개발의 접근 장벽을 

깨버림
 - 생산성이 향상됨

노드 장점
 - 일반적으로 성능이 매우 빠른 고성능 서버 : node 구조인 싱글 스레드기반의 

비동기 IO 처리 때문
 && request 받으면 처리, File IO나 Network 처리의 경우, IO 요청을 보내고, 

다른 작업하다, IO 요청이 끝나면 이벤트 받아 처리
 && CPU가 IO 응답을 기다리는 시간이 필요 없다.
 - 하나의 쓰레드로 여러개의 요청을 처리하는 구조 : clok 문제 처리하는데 최

적화
 - 개발 생산성이 좋다 : 프런트와 백엔드가 같은 언어
 - 성능과 안정성 : Paypal, Netflix, LinkedIn 등에서 이미 사용중
 - 활발한 개발자 커뮤니티, NPM이라는 Node.js 자칭:세계에서 가장 큰 오픈 소

스 라이브러리 생태계
 - 상대적으로 CPU Intensive한 작업이 없고, 많은 Connection을 동시에 처리해

야 하는 시나리오에 대해서 적합
 - socket.io : 웹소켓, ajax 롤폴링등의 웹푸쉬를 abstraction하여, 브라우져

에 상관 없이 푸쉬 구현 가능 > 싱글 쓰레드 기반의 멀티 플랙싱 기반으로 대용

량 사용자에 대한 푸쉬 처리 가능 // was는 쓰레드 갯수만큼 동시 컨넥션 

처리...
 - js 자체가 멀티 쓰레드 개념이 없어, 쓰레드간 동기화 처리등, 이런것을 아

예 자체 없음, 단순한 프로그래밍이 됨
 - 운영할 때, restart 시간이 1sec 미만 : 빠른 배포&업그레이드 가능

노드 단점
 - DBMS나 검색 엔진과 같은 복잡한 소프트웨어 개발에 비적합 : api나 비지니

스 로직정도 개발 가능[cpp나 자바와 혼합해서 사용 권장]
 - 타입이 없어 컴파일 시점에서 예외를 발견 못함
 - 싱글스레드이기때문에, 하나의 작업 자체가 시간이 많이 걸리면, 전체 시스템의 성능이 급격하게 떨어짐
 - js이기에 명시성, 가독성 낮기 때문에, 유지보수 어려움
 - 콜백헬이 많고, 지옥을 맛보는 경험[다양한 프레임웤이 대체하고는 있다.]
 - 코드 한 줄, 한 줄에 심여를 기울여야한다. 그냥 죽음[다양한 해결법이 나오고 있지만, 역시 한 땀, 한 땀 심여를 기울여야 하는건 마찬가지]
 - cluster 모듈이 반듯이 필요
 - 세션 공유용 redis등의 인프라 중요
 - v8엔진, gc 기반의 메모리 관리, cpu 사용률이 spike를 치면 서버가 멈춤
 - 기존의 프로그래밍 컨셉을 event 기반의 프로그래밍으로 전환하는데 어려움

노드 기반 서비스 개발시 사용할만한 개발&운영 도구
 - 보일러플레이트 : 프로젝트를 처음부터 완전히 새로 작성하는 것은 비효율, 

템플릿으로 익스프레스 프레임웍이랑 같은 것인가?

 - 빌드도구 - webpack, gulp, grunt : webpack 사용자가 늘고 있는 추세
 - 데이터 저장소 연동 라이브러리 - mongoose, elasticsearch, node-mysql, 

node-redis
 - 배치 작업 - node-cron, node schedule, agenda
 - 템플릿 엔진 - jade, mustache
 - 프로세스 관리 - pm2


