import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// interface inputType {
//   setTodos(기존투두: any): any;
//   event: string;
//   preventDefault(): string;
//   titleChange(event: any): any;
//   target: any;
//   value: any;
// }

function Input({ setTodos }: any): any {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const add = (event: any) => {
    event.preventDefault();
    if (!title) {
      alert("제목을 입력하세요 ");
      return;
    } else if (!contents) {
      alert("내용을 입력하세요");
      return;
    }

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((기존투두: any): any => {
      if (기존투두) return [...기존투두, newTodo];
    });
  };

  const titleChange = (event: any): any => {
    setTitle(event.target.value);
  };
  const contentsChange = (event: any): any => {
    setContents(event.target.value);
  };

  return (
    <div>
      <section>
        {/* 
        1. form 태그안에 onSubmit을 넣으면 한번호출되면 페이지를 바로 갱신하는 고유기능이있음.
        2. 그래서 위쪽에 event를 넣고 preventDefault()를써주면 그 고유기능을 없애줌.
        */}
        <form onSubmit={add}>
          제목 : <input value={title} onChange={titleChange} />
          내용 : <input value={contents} onChange={contentsChange} />
          <button>추가</button>
        </form>
      </section>
    </div>
  );
}

export default Input;
