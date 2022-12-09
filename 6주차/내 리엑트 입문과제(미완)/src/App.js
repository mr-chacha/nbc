import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

function Todo(props) {
  return (
    <div className="todo">
      제목:{props.todo.title}
      <br></br>
      내용:{props.todo.content}
      <br></br>
      <button
        onClick={() => {
          props.modal === true ? props.setModal(false) : props.setModal(true);
        }}
      >
        완료
      </button>
      <button
        onClick={() => {
          props.del(props.todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

const App = () => {
  //투두리스트
  let [todo, setTodo] = useState([
    { id: 1, title: "자바스크립트하기", content: "잘해보자", modal: false },
    { id: 2, title: "리엑트", content: "어렵다", modal: true },
  ]);
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [modal, setModal] = useState(false);

  //추가버튼만들기
  //1.새로운 함수와 변수를만들고
  //2.todo라는state의 id가 todo의 길이에 +1이되게함.
  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      modal: false,
    };
    console.log(todo);
    setTodo([...todo, newTodo]);
  };
  //삭제버튼 구현하기
  const del = (id) => {
    const newTodolist = todo.filter((todo) => todo.id !== id);
    setTodo(newTodolist);
  };

  return (
    <div className="layout">
      <header>투두리스트</header>
      <nav>
        <div className="add-btn">
          <input
            value={title}
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={content}
            placeholder="내용을 입력하세요"
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={addTodo}>추가하기</button>
        </div>
      </nav>
      <h1>working</h1>
      <div className="todostyle">
        {modal == false
          ? todo.map((todo) => {
              return (
                <Todo
                  modal={modal}
                  setModal={setModal}
                  del={del}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })
          : ""}
      </div>
      <h1>done</h1>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        버튼
      </button>
      <div className="todostyle">
        {modal == true
          ? todo.map((todo) => {
              return (
                <Todo
                  modal={modal}
                  setModal={setModal}
                  del={del}
                  todo={todo}
                  setTodo={setTodo}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default App;
