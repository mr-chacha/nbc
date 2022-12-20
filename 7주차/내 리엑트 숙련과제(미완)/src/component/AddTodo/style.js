import styled from "styled-components";

const AddContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StButton = styled.button`
  border: 1
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

export { AddContainer, StInput, StButton };
