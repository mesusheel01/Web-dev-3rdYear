import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

function App() {
  const [items, setItems] = useState([]);

 

  function addItem(inputText,textArea) {
    setItems(prevItems => {
      return [...prevItems, [inputText,textArea]];
    });
  }
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <Input 
          Item={addItem}
          text="text"
        />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
