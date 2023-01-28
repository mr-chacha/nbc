import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodooList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

function App() {
  //투두라는 객체를 가지고 있는 배열이 todos가 될거임
  const [todos, setTodos] = useState(initialState);

  interface initialStateType {
    title: any;
    contents: any;
    isDone: any;
  }

  return (
    <div>
      <Header> My Todo List </Header>
      <main style={{ padding: "20px" }}>
        {/*인풋입력부분 */}
        <Input setTodos={setTodos} />

        {/* 투두리스트 working 출력부분  */}
        {/* isActive가 true면 여기출력되고  */}
        {/* todos state를 props 해줌  */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />

        {/*투두리스트 done출력부분 */}
        {/* isActive가 false면 여기출력되게함  */}
        {/* todos state를 props 해줌  */}
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;

const initialState = [
  { title: "리엑트", contents: "어려웡", isDone: false, id: uuidv4() },
  { title: "리덕스", contents: "어려웡", isDone: false, id: uuidv4() },
  { title: "자바스크립트", contents: "어려웡", isDone: true, id: uuidv4() },
];
