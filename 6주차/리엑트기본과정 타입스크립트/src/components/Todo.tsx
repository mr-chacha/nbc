import React from "react";

interface Todos {
  item: any;
  isActive: any;
  setTodos: any;
}

function Todo({ item, isActive, setTodos }: Todos) {
  //삭제버튼
  const del = () => {
    setTodos((prev: any) => prev.filter((t: any) => t.id !== item.id));
  };
  //완료버튼
  const change = () => {
    setTodos((prev: any) =>
      prev.map((t: any) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div style={{ border: "1px solid black" }} key={item.id}>
      <h3>제목 : {item.title}</h3>
      <p>내용 : {item.contents}</p>
      <button onClick={change}>{isActive === true ? "완료" : "취소"}</button>
      <button onClick={del}>삭제</button>
    </div>
  );
}

export default Todo;
