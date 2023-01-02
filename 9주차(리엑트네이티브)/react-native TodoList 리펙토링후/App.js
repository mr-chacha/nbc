import { Alert } from "react-native";
import styled from "@emotion/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Btn from "./components/BtnContainer";
import TextBox from "./components/TextBox";

const Safe = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.View`
  width: 400px;
  height: 500px;
  padding: 20px;
`;

// 줄
const UnderLine = styled.View`
  border: 0.5px solid;
  margin: 10px 0px;
  width: 100%;
`;
// Input창
const Input = styled.TextInput`
  border: 1px solid;
  width: 100%;
  height: 30px;
  background-color: #efefef;
  padding: 5px;
`;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const newTodo = {
    id: Date.now(),
    text,
    isDone: false,
    isEdit: false,
    category,
  };

  const addTodo = () => {
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const setDone = (id) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx].isDone = !newTodos[idx].isDone;
    setTodos(newTodos);
    setText("");
  };

  const deleteTodo = (id) => {
    Alert.alert("삭제하시겠습니까", "정말로?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          const newTodos = todos.filter((todo) => todo.id !== id);
          setTodos(newTodos);
        },
      },
    ]);
  };

  const setEdit = (id) => {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx].isEdit = !newTodos[idx].isEdit;
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    //todos 를 복사하나함
    const newTodos = [...todos];
    const idx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[idx].text = editText;
    newTodos[idx].isEdit = false;
    setTodos(newTodos);
    setEditText("");
  };

  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    };
    if (todos.length > 0) saveTodos();
  }, [todos]);

  useEffect(() => {
    const getData = async () => {
      const resp_todos = await AsyncStorage.getItem("todos");
      const resp_cat = await AsyncStorage.getItem("category");
      setTodos(JSON.parse(resp_todos) ?? []);
      setCategory(resp_cat);
    };
    getData();
  }, []);

  const setCat = async (cat) => {
    setCategory(cat);
    await AsyncStorage.setItem("category", cat);
  };

  return (
    <Safe>
      <Layout>
        <Btn setCat={setCat} category={category} />
        <UnderLine />

        <Input
          placeholder="여기에 입력하삼"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
        />
        <UnderLine />

        {todos.map((todo) => {
          {
          }
          if (category === todo.category) {
            return (
              <TextBox
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                setDone={setDone}
                setEdit={setEdit}
                deleteTodo={deleteTodo}
                setEditText={setEditText}
              />
            );
          }
        })}
      </Layout>
    </Safe>
  );
}
