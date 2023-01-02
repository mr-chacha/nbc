import { StatusBar } from "expo-status-bar";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
// 버튼 공간
const BtnContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
// 버튼 공간2
const BtnItem = styled.TouchableOpacity`
  background-color: #999;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 100px;
  height: 30px;
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
// Text 보이는창
const Textcontainer = styled.View`
  border: 1px solid;
  width: 100%;
  height: 30px;
  background-color: #efefef;
  padding: 3px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;
`;

//아이콘들
const AddIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default function App() {
  /* 
1. Add추가기
1-1. 데이터 구조만들기 
1-2. state 만들기
1-3. addTodo 만들기
1-4. 인풋창안에 onchange 만들어서 입력된값이 변경되게 하고 onSubmitEditing로 addTodo실행하게하기 
1-5. map 함수로 돌려서 추가된거 보여주기
*/

  /*
2. 카테고리 토글 만들기
2-1. 카테고리 press 하면 색깔 바뀌게 하기 
2-2. 현재의 카테고리에 대한내용만 보여주게하기
*/

  /*
3. setDone 아이콘 토글링
3-1. todos를 하나 복사해줌
3-2. id의 index를 찾고 todo의 id와 매개변수로 받은 id와 같으면 
3-3. newTodos의 isDone 값을 토글링하고
3-4 그걸 set Todos에 다시담음.
*/

  /*
4.Delete Todo
4-1 아이콘 클릭시 알럿창 띄우고
4-2 삭제하기 버튼만들고
4-3 onPress 로 삭제하기 넣고
4-4 삭제하기 버튼클릭시 Alert창 띄우기 
*/

  /*
5. EditTodo
5-1. Edit토글링 함수만들기 
5-2. 인풋안에 값이 바뀌는걸 담아놓을 setEdit을 만들고
5-3. input안에 value onchangeText랑 onsubmitEditing을 주고
5-4. valuse랑 onChangeText에 들어갈 새로운 state를 만들어서 넣어줌
5-5. onSubmitEditing에 넣어줄 함수 editTodo를 만들어줌
*/

  /*
6. Async Storage 사용하기
6-1 useEffect로 값이 바뀔때마다 Async Storage로 저장하게끔 하기
6-2 
*/
  //1-2 state 만들기
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");

  //1-1. 데이터 구조만들기
  const newTodo = {
    id: Date.now(),
    text,
    isDone: false,
    isEdit: false,
    category,
  };

  //1-3  addTodo 만들기
  const addTodo = () => {
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  //3. setDone 아이콘 토글링
  const setDone = (id) => {
    // 3-1. todos를 하나 복사해줌
    const newTodos = [...todos];
    //3-2. id의 index를 찾고 todo의 id와 매개변수로 받은 id와 같으면
    const idx = newTodos.findIndex((todo) => todo.id === id);
    //3-3. newTodos의 isDone 값을 토글링하고
    newTodos[idx].isDone = !newTodos[idx].isDone;
    //3-4 그걸 set Todos에 다시담음.
    setTodos(newTodos);
    setText("");
  };

  //4. DeleteTodo
  const deleteTodo = (id) => {
    //4-4 alert창 띄우주기
    Alert.alert("삭제하시겠습니까", "정말로?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          //4-1 todos에 filter로
          const newTodos = todos.filter((todo) => todo.id !== id);
          //4-2 필터된걸 다시 setTodos로 넣어줌
          setTodos(newTodos);
        },
      },
    ]);
  };

  //5. EditTodo
  //5-1 SetDone 함수랑 로직이 비슷함.
  const setEdit = (id) => {
    // 5-2. todos를 하나 복사해줌
    const newTodos = [...todos];
    //5-3. id의 index를 찾고 todo의 id와 매개변수로 받은 id와 같으면
    const idx = newTodos.findIndex((todo) => todo.id === id);
    //5-4. newTodos의 isDone 값을 토글링하고
    newTodos[idx].isEdit = !newTodos[idx].isEdit;
    //5-5 그걸 set Todos에 다시담음.
    setTodos(newTodos);
  };

  //5-9 onSubmitEditing 에 들어갈 함수
  const editTodo = (id) => {
    //todos 를 복사하나함
    const newTodos = [...todos];
    // findIndex로 index 찾고 map에 돌고있는 todo의 아이디와 현재 수정하려는것의 id와 같으면
    const idx = newTodos.findIndex((todo) => todo.id === id);
    //nexTodos의 idx의 text값을 editText에 할당하고
    newTodos[idx].text = editText;
    // isEdit을 false로 다시줌 왜주는지는 글쎄..
    newTodos[idx].isEdit = false;
    // 값을변경하려할때 그안에 newTodos의 값이 들어깄게함.
    setTodos(newTodos);
    setEditText("");
  };

  //6-1 useEffect로 Async Storage 값이 바뀔때마다 저장하게끔 하기
  //6-2 현재 최신 todos를 Async Storage에 저장할거
  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    };
    //6-4 todos는 빈배열인데 0보다클때라는 조건문을 달아서 첫렌더링할때 이 useEffect는 실행되지 않게함
    if (todos.length > 0) saveTodos();
  }, [todos]);

  //6-3 첫 렌더링(마운트)될때 Async Storage에서 값을 불러오기
  useEffect(() => {
    const getData = async () => {
      const resp_todos = await AsyncStorage.getItem("todos");
      const resp_cat = await AsyncStorage.getItem("category");
      // 6-7 null병합연산자로 setTodos에 넣어주는데 그이유는 현재 setTodos 안에 어떤값도 없기때문임.
      setTodos(JSON.parse(resp_todos) ?? []);
      setCategory(resp_cat);
    };
    getData();
  }, []);

  // 6-5 카테고리도 새롤고침할때 내가 보던 카테고리가 보이게끔
  const setCat = async (cat) => {
    setCategory(cat);
    //6-6 cat은 문자열이기 때문에 todos에 한거처럼 JSON.stringify할 필요없음.
    await AsyncStorage.setItem("category", cat);
  };

  return (
    <Safe>
      <Layout>
        <BtnContainer>
          {/*2-1 버튼누르면 setCategory를 js로 바꾸고 삼항연산자로 색깔을 조절해줌.  */}
          <BtnItem
            style={{ backgroundColor: category === "js" ? "#0FBCF9" : "#999" }}
            onPress={() => {
              setCat("js");
            }}
          >
            <Text>자바스크립트</Text>
          </BtnItem>
          <BtnItem
            style={{ backgroundColor: category === "rt" ? "#0FBCF9" : "#999" }}
            onPress={() => {
              setCat("rt");
            }}
          >
            <Text>리엑트</Text>
          </BtnItem>
          <BtnItem
            style={{ backgroundColor: category === "ct" ? "#0FBCF9" : "#999" }}
            onPress={() => {
              setCat("ct");
            }}
          >
            <Text>코딩테스트</Text>
          </BtnItem>
        </BtnContainer>
        <UnderLine />
        {/* 1-4 인풋창안에 onchange 만들어서 입력된값이 변경되게 하고 onSubmitEditing로 addTodo실행하게하기 */}
        <Input
          placeholder="여기에 입력하삼"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
        />
        <UnderLine />
        {/* 1-5 map 함수로 todo를 돌리고 todo의 text가 보이게 하기 */}
        {todos.map((todo) => {
          {
            /* 2-2 if문으로 현재의 category가 todo의 category랑 같으면 리턴으로 보여주고 아니면 안보여줌. */
          }
          if (category === todo.category) {
            return (
              <Textcontainer key={todo.id}>
                {/* 3-6 글이 나오는값에 style값을 조건문으로줌. */}
                {/*5-7 todo.isEdit이면  <TextInput /> 이나와서 수정할수 있게하고 아니면 원래모양대로 */}
                {todo.isEdit ? (
                  /* 5-8 value가 담길 editText state와  onChangeText가 담길 setEditText를 만듬 */
                  <TextInput
                    onSubmitEditing={() => editTodo(todo.id)}
                    value={editText}
                    onChangeText={setEditText}
                    style={{ backgroundColor: "white", flex: "1" }}
                  />
                ) : (
                  <Text
                    style={{
                      textDecorationLine: todo.isDone ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </Text>
                )}

                <AddIcon>
                  {/* 3-5 onpress할때 setDone가 실행되게함(todo.id를 매개변수로) */}
                  <TouchableOpacity onPress={() => setDone(todo.id)}>
                    <AntDesign name="checksquareo" size={22} color="black" />
                  </TouchableOpacity>
                  {/* 5-6 Edit 아이콘에 onpress로 setEdit 넣어주기 */}
                  <TouchableOpacity onPress={() => setEdit(todo.id)}>
                    <FontAwesome
                      name="pencil-square-o"
                      size={23}
                      color="black"
                    />
                  </TouchableOpacity>
                  {/* 4-3 onPress 할때 deleteTodo 실행하기  */}
                  <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                    <FontAwesome name="trash-o" size={22} color="black" />
                  </TouchableOpacity>
                </AddIcon>
              </Textcontainer>
            );
          }
        })}
      </Layout>
    </Safe>
  );
}
