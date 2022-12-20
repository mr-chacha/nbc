// 1. RootReducer를만들고 reducer를 합칠것임
// modules 밑에 여러 파일들이 변화하는값임

import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// 현재 todos, counter, users
const rootReducer = combineReducers({
  todos,
});

// 2. 이걸이용해서 store를 만들것임
const store = createStore(rootReducer);
// 3. export 하고 다른파일에서 import 한다.
export default store;
