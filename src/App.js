import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return <TodoList />;
}

export function TodoList() {
  const todoItems = [];
  return <>{todoItems}</>;
}

export function TodoListItem() {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleClickCheckbox = () => setIsChecked(!isChecked);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleClickCheckbox}
      />
      <TodoListDescription crossOut={isChecked}>
        My first item
      </TodoListDescription>
      <button>X</button>
    </div>
  );
}

const TodoListDescription = styled.span`
  text-decoration: ${(props) => (props.crossOut ? "line-through" : "none")};
`;

export default App;
