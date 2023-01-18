import React from "react";
import Todo from "./Todo";

interface TodoLists {
  isActive: any;
  setTodos: any;
  todos: any;
}

//App.jsx에서 props로 받아온 todos, isActive를 꽂아줌
function TodoList({ todos, isActive, setTodos }: TodoLists) {
  return (
    <>
      <h4>{isActive === true ? "해아할거" : "완료된것"}</h4>
      {todos
        // todos의 isDone 값은 defalt로 false값이고 그 false가 아닌 거만 보이게하면
        // isActive가 true인 곳에서만 map을 돌리고 return 하면 출력이됨.
        .filter((item: any) => item.isDone === !isActive)
        .map((item: any) => {
          return <Todo item={item} isActive={isActive} setTodos={setTodos} />;
        })}
      :
    </>
  );
}
export default TodoList;
