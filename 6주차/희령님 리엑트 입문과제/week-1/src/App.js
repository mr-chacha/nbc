import React, { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <span>My Todo List</span>
      <span>React</span>
    </div>
  );
}

function Form(props) {
  return (
    <div className="form">
      <span>제목</span>
      {/* input value에 입력한 값=title을 넣고 setTitle을 이용해서 value를 비워준다!*/}
      <input name="title" value={props.title} onChange={props.addHandler} />
      <span>내용</span>
      <input name="content" value={props.content} onChange={props.addHandler} />
      <button onClick={props.addContent}>추가하기</button>
    </div>
  );
}

function Todo(props) {
  return (
    <div className="list-wrapper">
      <div className="list_text">
        <h2 className="todo-title">{props?.list?.title}</h2>
        <p className="todo-content">{props?.list?.content}</p>
      </div>
      <div className="todo-button">
        <button onClick={() => props.deleteHandler(props.list.id)}>
          삭제하기
        </button>
        {/* <button onClick={props.deleteHandler}>삭제하기</button> */}
        <button onClick={() => props.doneHandler(props.list.id)}>완료</button>
      </div>
    </div>
  );
}

function Done(props) {
  return (
    <div className="list-wrapper">
      <div className="list_text">
        <h2 className="todo-title">{props?.list?.title}</h2>
        <p className="todo-content">{props?.list?.content}</p>
      </div>
      <div className="todo-button">
        <button onClick={() => props.deleteHandler(props.list.id)}>
          삭제하기
        </button>
        <button onClick={() => props.cancelHandler(props.list.id)}>취소</button>
      </div>
    </div>
  );
}

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "운동하기", content: "테스트1", isDone: false },
    { id: 2, title: "잘 쉬고 공부하기", content: "테스트2", isDone: true },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addHandler = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };
  const addContent = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      content,
      isDone: false,
    };

    setTodo((abc) => {
      return [...abc, newTodo];
    });
    //input창 지워주기
    setTitle("");
    setContent("");
  };

  //삭제버튼
  const deleteHandler = (id) => {
    const newTodolist = todo.filter((list) => list.id !== id);
    setTodo(newTodolist);
  };

  const cancelHandler = (id) => {
    let copy = [...todo];
    todo[id - 1].isDone = false;
    console.log(copy);
    setTodo(copy);
  };
  const doneHandler = (id) => {
    let copy = [...todo];
    todo[id - 1].isDone = true;
    setTodo(copy);
    console.log(todo);
    // console.log(copy)
    // const finished = todo.map((list) => list.id);
    // console.log(finished) [1, 2, 3]
    // const doneTodo = todo.filter((list) => list.id === id);
    // const undatedTodo = doneTodo.map((list) => list.id, list.title, list.content)
    // const doneTodo = todo[id - 1]
    // console.log(doneTodo);
    // const donedoneTodo = {
    //   ...doneTodo, isDone: true,
    // }

    // console.log(donedoneTodo)
    // const newTodo = todo.map((list) =>
    //   // list.id === donedoneTodo.id ? {...todo, ...donedoneTodo} : todo,
    //   list.id === doneTodo.id ? {...doneTodo, isDone: true} : todo,
    // );
    // console.log(newTodo)

    // setIsDone(true);
    // if (finished.id === id) {
    //   setIsDone(true)
    // }
  };

  return (
    <div className="wrap">
      <Header />
      <Form
        title={title}
        content={content}
        addContent={addContent}
        addHandler={addHandler}
      />
      {/* <List /> */}
      <div className="list">
        <h2>Working.. :불:</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === false)
              return (
                <Todo
                  doneHandler={doneHandler}
                  deleteHandler={deleteHandler}
                  list={list}
                  key={list.id}
                />
              );
          })}
        </div>
      </div>
      {/* 완료 isDone flase->true로 바꾸고 map return에 조건)삼항연산자) 달기 */}
      <div className="list">
        <h2>Done..! :짠:</h2>
        <div className="list-container">
          {todo.map((list) => {
            if (list.isDone === true)
              return (
                <Done
                  cancelHandler={cancelHandler}
                  deleteHandler={deleteHandler}
                  list={list}
                  key={list.id}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
