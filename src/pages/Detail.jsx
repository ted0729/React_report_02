import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Detail() {
  const todos = useSelector((state) => state.todos.todos);

  const navigate = useNavigate();

  const params = useParams();

  const selectedTodo = todos.find((item) => {
    return item.id === parseInt(params.id); //url 매개변수는 문자열이기떄문에 parseInt를 사용
  });

  return (
    <>
      <DetailListBox>
        <div>
          <h5>ID: {selectedTodo.id}</h5>
          <ReturnButton onClick={() => navigate("/")}>Go back</ReturnButton>
        </div>
        <h3>{selectedTodo.title}</h3>
        <h4>{selectedTodo.body}</h4>
      </DetailListBox>
    </>
  );
}

export default Detail;

const DetailListBox = styled.div`
  width: 230px;
  height: 220px;
  border: 3px solid #a9dfed;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ReturnButton = styled.button`
  background-color: #f49b9b;
  border: white;
  height: 20px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  display: block;
  margin: 0 auto;
`