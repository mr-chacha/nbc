const Todo = (props) => {
  return (
    <div className="todo">
      제목:{props.todo.title}
      <br></br>
      내용:{props.todo.content}
      <br></br>
      <button
        onClick={() => {
          props.isWorking === true
            ? props.setModal(false)
            : props.setModal(true);
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
};

export default Todo;
