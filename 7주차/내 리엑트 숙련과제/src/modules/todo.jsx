import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "리엑트",
      age: 10,
      content: "어려워",
      isDone: false,
      displaytoggle: true,
    },
    {
      id: 2,
      title: "리덕스",
      age: 10,
      content: "어려워",
      isDone: false,
      displaytoggle: true,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos = [...state.todos, actions.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
    toggle: (state) => {
      state[0].title = "자바";
    },
  },
});

export const { addTodo, deleteTodo, toggle } = todosSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todosSlice.reducer;
