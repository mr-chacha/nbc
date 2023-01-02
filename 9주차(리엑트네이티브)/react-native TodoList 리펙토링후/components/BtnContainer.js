import { Text } from "react-native";
import styled from "@emotion/native";

const BtnContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const BtnItem = styled.TouchableOpacity`
  background-color: #999;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 100px;
  height: 30px;
`;

export default function Btn({ setCat, category }) {
  return (
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
  );
}
