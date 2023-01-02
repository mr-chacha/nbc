import { Alert } from "react-native";
import styled from "@emotion/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Btn from "./components/BtnContainer";
import TextBox from "./components/TextBox";
import {
  onSnapshot,
  query,
  collection,
  doc,
  orderBy,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { dbService } from "./firebase";

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
    // id: Date.now(),
    text,
    isDone: false,
    isEdit: false,
    category,
    createdAt: Date.now(),
  };

  const addTodo = async () => {
    // setTodos((prev) => [...prev, newTodo]);
    await addDoc(collection(dbService, "todos"), newTodo);
    setText("");
  };

  const setDone = async (id) => {
    const idx = todos.findIndex((todo) => todo.id == id);
    await updateDoc(doc(dbService, "todos", id), {
      isDone: !todos[idx].isDone,
    });
  };

  const deleteTodo = (id) => {
    Alert.alert("삭제하시겠습니까", "정말로?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: async () => {
          await deleteDoc(doc(dbService, "todos", id));
        },
      },
    ]);
  };

  // 파이어베이스로 isEdit값을 true false로 토글하는
  const setEdit = async (id) => {
    const idx = todos.findIndex((todo) => todo.id == id);
    await updateDoc(doc(dbService, "todos", id), {
      isEdit: !todos[idx].isEdit,
    });
  };

  //수정된값이 파이어베이스에 저장되고 isEdit값도 false로 변경되게
  const editTodo = async (id) => {
    await updateDoc(doc(dbService, "todos", id), {
      text: editText,
      isEdit: false,
    });
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "todos"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const newTodos = snapshot.docs.map((doc) => {
        console.log(snapshot.docs);
        const newTodo = {
          id: doc.id,
          ...doc.data(),
        };
        return newTodo;
      });
      setTodos(newTodos);
    });

    // 파이어스토어로 카테고리 연결하기
    const getCategory = async () => {
      const snapshot = await getDoc(
        doc(dbService, "category", "currentCategory")
      );
      setCategory(snapshot.data().category);
    };
    getCategory();
  }, []);

  const setCat = async (cat) => {
    setCategory(cat);
    await updateDoc(doc(dbService, "category", "currentCategory"), {
      category: cat,
    });
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
