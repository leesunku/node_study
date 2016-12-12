// 이벤트 연결 개수 제한을 15개까지 늘립니다.

process.setMaxListeners(15);

// 특정 이벤트의 이벤트 리스너를 제거합니다.

process.removeListener(eventName, handler);

// 모든 이벤트 리스너를 제거합니다.

process.removeAllListeners([eventName]);