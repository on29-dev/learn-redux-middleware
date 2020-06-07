const myLogger = store => next => action => {
  console.log(action); // 액션이 dispatch 될 때 action을 콘솔에 출력하겠다.
  console.log('\tPrev', store.getState());
  const result = next(action); // action을 다음 미들웨어(혹은 리듀서)에게 전달하겠다.
  console.log('\tNext', store.getState()); // 액션이 리듀서에서 모두 처리된 다음에 그 다음 상태를 콘솔에 출력하겠다.
  return result; // container에서 dispatch 되었을때 그 결과물이 result임
}

export default myLogger;