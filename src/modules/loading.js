import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    //state의 모양 : {sample/GET_POST: false}
    //action의 모양 : {type: "loading/START_LOADING", payload: "sample/GET_USERS"}
    [START_LOADING]: (state, action) => {
      return {
        ...state,
        //[action.payload]: true => 액션타입을 state의 키값으로 지정해서 해당 boolean 값을 조절하겠다는 의미
        [action.payload]: true,
      };
    },
    [FINISH_LOADING]: (state, action) => {
      return {
        ...state,
        [action.payload]: false,
      };
    },
  },
  initialState
);

export default loading;
