import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
    todos,
}); 
const store = createStore(rootReducer); 

export default store; 

// store 를 만들어주는 곳이다 여긴