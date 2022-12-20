import { v4 as uuidv4 } from "uuid";

// 1. action itmes 를 만들고
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// 2. action creators를 만들고
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
// 2. action creators를 만들고
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

// 2. action creators를 만들고
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 3. inital State를
const inintialState = [
  {
    id: uuidv4(),
    title: "리엑트",
    content: "어려움",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "리덕스",
    content: "어려움",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "자바스크립트",
    content: "어려움",
    isDone: true,
  },
];

// 4. reducer를 만들어서 state를 변경함

const todos = (state = inintialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
export default todos;
// 5. reducer를 export 할것
