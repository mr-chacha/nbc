import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTodo, switchTodo } from "../../modules/todos";
import { TodoBox, TodoList, Todo } from "./style";

function TodoLIst({ toggle }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const delBtn = (id) => {
    dispatch(removeTodo(id));
  };
  const navigate = useNavigate();
  const changeBtn = (id) => {
    dispatch(switchTodo(id));
  };
  console.log(removeTodo);
  return (
    <TodoBox>
      <h4>{toggle ? "해야할일" : "끝난일"}</h4>
      {todos
        .filter((item) => item.isDone === !toggle)
        .map((item) => {
          return (
            <TodoList key={item.id}>
              <Todo>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <button onClick={() => changeBtn(item.id)}>
                  {toggle ? "완료" : "취소"}
                </button>
                <button onClick={() => delBtn(item.id)}>삭제</button>
                <br></br>
                <button
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                >
                  상세보기
                </button>
              </Todo>
            </TodoList>
          );
        })}
    </TodoBox>
  );
}

export default TodoLIst;
