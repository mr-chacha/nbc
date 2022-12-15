import React from "react";

function Todo({ item, isActive, setTodos }) {
  //삭제버튼
  const del = () => {
    setTodos((prev) => prev.filter((t) => t.id !== item.id));
  };
  //완료버튼
  const change = () => {
    setTodos((prev) =>
      prev.map((t) => {
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
