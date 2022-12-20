import styled from "styled-components";
import "./App.css";

import AddTodo from "./component/AddTodo/AddTodo.jsx";
import TodoBox from "./component/TodoBox/TodoBox.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AddContainer>
                <AddTodo />
              </AddContainer>
              <TodoBox />
            </div>
          }
        />
        <Route path="/view" element={<div>상세페이지임</div>} />
      </Routes>
    </Layout>
  );
}

export default App;

const AddContainer = styled.div`
  display: block;
  gap: 12px;
  padding: 30px;
`;

const Layout = styled.body`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
`;
