import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import VisibleTodoList from "./containers/VisibleTodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Header />
        <VisibleTodoList />
      </header>
    </div>
  );
}

export default App;
