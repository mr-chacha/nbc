import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../modules/todos";
import { v4 as uuidv4 } from "uuid";

function Input() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  const addContent = (event) => {
    setContent(event.target.value);
  };

  const addBtn = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <form onSubmit={addBtn}>
        제목: <input type="text" onChange={addTitle} value={title} />
        내용: <input type="text" onChange={addContent} value={content} />
        <button type="submit"> 추가</button>
      </form>
    </div>
  );
}

export default Input;
