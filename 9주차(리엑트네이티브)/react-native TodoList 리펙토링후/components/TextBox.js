import { Text, TextInput, TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

const AddIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

function TextBox({
  todo,
  editTodo,
  setDone,
  setEdit,
  deleteTodo,
  editText,
  setEditText,
}) {
  return (
    <Textcontainer>
      {todo.isEdit ? (
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
        <TouchableOpacity onPress={() => setDone(todo.id)}>
          <AntDesign name="checksquareo" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setEdit(todo.id)}>
          <FontAwesome name="pencil-square-o" size={23} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
          <FontAwesome name="trash-o" size={22} color="black" />
        </TouchableOpacity>
      </AddIcon>
    </Textcontainer>
  );
}

export default TextBox;
