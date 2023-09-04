import React from "react";
import Router from "./shared/Router";

const App = () => {
  return <Router />
  
};

export default App;



// 일의 순서을 먼저 생각해보자..
// 일단..App.jsx에는 layout styled을 담을 <>와
// 전체적인 틀만 담당해서 두고,

// configStore.js 는 기본세팅..
// index.js도 <Provider store={store}> 감싸는걸 제외하면 기본세팅..
// 이런 작은 프로젝트에서 컴포넌트 분리는 그렇게 중요하지않다. 나중에 생각
// 기능구현을 먼저해보자. redux 구축을 먼저하자
// 일단 모든 기능은 레듀서에서 담당한다.