import { createAction, handleActions } from "redux-actions";

// 액션의 타입을 설정
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수 생성
// 해당되는 액션의 타입의 return 값을 정의한다.
// 외부에서 사용할게 아니라면 export를 꼭 해주지 않아도 된다
// export를 하면 파일내부, 외부 모든 곳에서 사용이 가능하다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// Thunk 생성함수
// 액션 생성함수를 비동기적으로 dispatch 시켜준다.
export const increaseAsync = () => (dispatch) => {
  dispatch(increase());
};

export const decreaseAsync = () => (dispatch) => {
  dispatch(decrease());
};

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state) => {
      return {
        ...state,
        number: state.number + 1,
      };
    },
    [DECREASE]: (state) => {
      return {
        ...state,
        number: state.number - 1,
      };
    },
  },
  initialState
);

export default counter;
