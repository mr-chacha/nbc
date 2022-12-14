import Todo from "./Todo";

const TodoList = ({ isWorking, setModal, del, todo, setTodo }) => {
  //   console.log(todo);
  return (
    <div>
      <h1>{isWorking ? "working" : "done"}</h1>
      <div className="todostyle">
        {todo
          .filter((t) => t.isDone === isWorking)
          .map((item) => {
            console.log(item);
          })}
        <Todo
          setModal={setModal}
          del={del}
          todo={todo}
          setTodo={setTodo}
          isWorking={isWorking}
        />
        {/* {modal === false
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
          : ""} */}
      </div>
    </div>
  );
};

export default TodoList;
