import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../modules/todo";
import { AddContainer, StInput, StButton } from "./style.js";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: todos.todos.length + 1,
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <div>
      <h1>투두리스트</h1>
      <AddContainer>
        <form onSubmit={onSubmitHandler}>
          <label>제목을 입력하세요</label>
          <StInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </form>
      </AddContainer>
      <AddContainer>
        <form onSubmit={onSubmitHandler}>
          <label>내용을 입력하세요</label>
          <StInput
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <StButton>추가하기</StButton>
        </form>
      </AddContainer>
    </div>
  );
}

export default AddTodo;
