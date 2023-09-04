import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import TodoList from '../components/TodoList'

function Home() {
    return (
        <LayOut>
            <Input />
            <TodoList />
        </LayOut>
    )
}

export default Home

const LayOut = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    min-width: 800px;
    margin: 0 auto;
    /* outline: 1px solid red */
`
