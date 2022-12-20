import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const paId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const filterTodo = todos.filter((item) => item.id === paId)[0];

  console.log(filterTodo);

  return (
    <div>
      상세보기
      <br></br>
      제목 : {filterTodo.title}
      <br></br>
      내용 : {filterTodo.content}
      <br></br>
      완료여부 : {filterTodo.isDone.toString()}
      <br></br>
      <button onClick={() => navigate("/")}>이전페이지</button>
    </div>
  );
}

export default Detail;
