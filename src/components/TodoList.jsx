import React from 'react'
import { useSelector } from 'react-redux'
import ListContainer from './ListContainer'
import styled  from 'styled-components';

function TodoList() {
  
    const todos = useSelector(state => state.todos.todos)
                            // 모듈 todos에서 todos를 가져와라.
    return (
    <div>
        <TodoListBoxContainer>
            <h3>Working now mate~⛈️</h3> {
                todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <ListContainer 
                                key={todo.id}
                                todo={todo}
                            />
                        )
                    }
                })
            }
        </TodoListBoxContainer>
        <TodoListBoxContainer>
            <h3>Finish mate~🌈</h3> {
                todos.map((todo) => {
                    if (todo.isDone) {
                        return (
                            <ListContainer 
                                key={todo.id}
                                todo={todo}
                            />
                        )
                    }
                })
            }
        </TodoListBoxContainer>
    </div>
    )
}

export default TodoList

const TodoListBoxContainer = styled.div` /* 새로운 스타일 컴포넌트 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;