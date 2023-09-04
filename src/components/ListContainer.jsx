import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, switchTodo } from '../redux/modules/todos';
import { Link } from "react-router-dom";
import styled  from 'styled-components';

function ListContainer({todo}) {
    const dispatch = useDispatch();

    return (
        <TodoListBox>
            <ListTitleContent>
                <h3>{todo.title}</h3>
                <h4>{todo.body}</h4>
            </ListTitleContent>
            
            <div>
                <Link to={`/${todo.id}`} style={{ textDecoration: "none" }}>
                    <DetailButton>View Detail</DetailButton>
                </Link>
                <ChangeButton onClick={() => { dispatch(switchTodo(todo.id)) }}>
                    {todo.isDone ? 'Cancel?' : 'Complete?'}
                </ChangeButton> &nbsp;
                <DeletButton onClick={() => { dispatch(deleteTodo(todo.id)) }}>
                    Delete?
                </DeletButton>
            </div>
        </TodoListBox>
    );
}

export default ListContainer;


const TodoListBox = styled.div`
  width: 230px;
  border: 3px solid #a9dfed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  padding: 8px;
`

const ListTitleContent = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const ChangeButton = styled.button`
  width: auto;
  background-color: #b9f9d4;
  border: white;
  height: 19px;
  border-radius: 5px;
  font-weight: bold;
`

const DetailButton = styled.div`
    text-align: center;
    padding-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
`

const DeletButton = styled.button`
  background-color: #f49b9b;
  border: white;
  height: 18px;
  border-radius: 5px;
  font-weight: bold;
`