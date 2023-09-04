import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import styled  from 'styled-components';

function Input() {
    const dispatch = useDispatch()
    
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    
    // 제목란
    const titleOnclickHandler = (e) => {
        setTitle(e.target.value)
    }
    // 내용란
    const bodyOnchlickHandler = (e) => {
        setBody(e.target.value)
    }
    // 추가란
    const addButoonHandler = (e) => {
        e.preventDefault();
        
        if(!title || !body) {
            alert("제목과 내용을 다시 한번 잘~~보세요!")
        } else {
            const newTodo = {
                id: Date.now(),
                title,
                body,
                isDone: false,
            }
        dispatch(addTodo(newTodo))
        setTitle('')
        setBody('')
    }
}
    return( 
   <InputContainer>
        <InputBox>
            Title : <input
                value={title}
                type="text"
                placeholder="제목 입력해요!"
                onChange={titleOnclickHandler} />&nbsp;
            Content : <input
                value={body}
                type="text"
                placeholder="내용 입력해요!"
                onChange={bodyOnchlickHandler}/> 
                <AddButton onClick={addButoonHandler}>Add</AddButton>
        </InputBox>
    </InputContainer>
    )
}
export default Input

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
    font-weight: bold;
`

const AddButton = styled.button`
  background-color: #cff3fc;
  border: white;
  border-radius: 5px;
  height: 24px;
  margin: 10px;
  font-weight: bold;
  text-align: center;
`
