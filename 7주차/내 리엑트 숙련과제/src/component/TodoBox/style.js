import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
`;

const View = styled.span`
  text-decoration: none;
  color: red;
  font-size: 14px;
`;

const TodoSt = styled.div`
  border: 1px solid #111;
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 24px;
  margin-left: 10px;
`;
export { ListContainer, View, TodoSt };
