import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoOnClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => todoOnClick(index)}></Todo>
    ))}
  </ul>
);

export default TodoList;
