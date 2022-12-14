import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../../modules/todo";
import { Link } from "react-router-dom";
import { ListContainer, View, TodoSt } from "./style.js";

function TodoBox() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  return (
    <div>
      <h1>Working</h1>
      <ListContainer>
        {todos.map((a) => {
          return (
            <TodoSt key={a.id}>
              {a.isDone == false ? (
                <div>
                  <Link to="/view" style={{ textDecoration: "none" }}>
                    <View>상세보기</View>
                  </Link>
                  <br></br>
                  제목:{a.title}
                  <br></br>
                  내용:{a.content}
                  <br></br>
                  <button
                    onClick={() => {
                      console.log(a.isDone);
                      dispatch(toggle());
                      console.log(a.title);
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(a.id));
                    }}
                  >
                    삭제
                  </button>
                  <br></br>
                </div>
              ) : (
                <div>{console.log("true임")}</div>
              )}
            </TodoSt>
          );
        })}
      </ListContainer>
      <h1>Done</h1>
    </div>
  );
}

export default TodoBox;
