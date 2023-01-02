import { TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const AddIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

function Icon({ setDone, setEdit, deleteTodo, todo }) {
  return (
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
  );
}

export default Icon;
