import React, { useState } from 'react';

function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
    console.log(todos)
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;