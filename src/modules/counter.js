const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase =_=>({type:INCREASE});
export const decrease =_=>({type:DECREASE});

// 여기서 thunk 함수는 dispatch, getState를 인자로 받는 함수를 가리키는 것.
// 빈 인자를 받는 함수는 엄밀히 말하면 thunk 함수가 아니라 thunk 함수를 만들어주는 크리에이터.
export const increaseAsync = () => dispatch => {
  // getState 인자는 생략 가능
  setTimeout(()=>{
    dispatch(increase());
  }, 1000);
}
export const decreaseAsync = () => dispatch => {
  // getState 인자는 생략 가능
  setTimeout(()=>{
    dispatch(decrease());
  }, 1000);
}

const initialState = 0;

export default function counter(state=initialState, action){
  switch(action.type) {
    case INCREASE:
        return state + 1;
    case DECREASE:
        return state -1;
    default:
        return state;
  }
}