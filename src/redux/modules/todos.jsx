const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const SWITCH_TODO = "SWITCH_TODO"
// state
export const addTodo = (payload) => {
	return {
		type: ADD_TODO,
		payload
	}
}

export const deleteTodo = (payload) => {
	return {
		type: DELETE_TODO,
		payload,
	}
}

export const switchTodo = (payload) => {
	return {
		type: SWITCH_TODO,
		payload,
	}
}

const initialState = {
	todos: [
		{
		id: 0,
		title: "세상엔",
		body: "쉬운게 없고",
		isDone: false
		},
		{
		id: 1,
		title: "이것 또한",
		body: "마찬가지다",
		isDone: true
		}
	]
}

// 리듀서
const planList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
		return {
			...state, todos: [...state.todos, action.payload]
		}
		case DELETE_TODO:
			return {
			...state,
			todos: state.todos.filter(todo => todo.id !== action.payload)
			}
		case SWITCH_TODO:
			return {...state, todos: state.todos.map(todo => {
				if(todo.id === action.payload) {
					return {...todo, isDone: !todo.isDone}
				} else {
					return todo
				}
			})
			}
		default:
		return state
	}
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default planList;