// 리듀서가 액션을 취하기 전에 어떤 작업을 취하는 것 => 미들웨어
/*const Middleware = store => next => action => {
  // 미들웨어 기본구조
}*/

/*const Middleware = function middleware(store){
  return function(next){
    return function(action){

    }
  }
}*/

import React from "react";
import SampleContainer from "./containers/SampleContainer";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <SampleContainer />
    </>
  );
}

export default App;
