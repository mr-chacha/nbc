import React from "react";
import Input from "../redux/\bcomponents/Input/Input";
import TodoList from "../redux/\bcomponents/TodoList/TodoLIst";
import Footer from "../redux/\bcomponents/Footer/Footer";
function Main() {
  return (
    <>
      <Input />
      <TodoList toggle={true} />
      <TodoList toggle={false} />
      <Footer />
    </>
  );
}

export default Main;
