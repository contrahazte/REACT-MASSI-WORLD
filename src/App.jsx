import React from 'react'
import TodoList from './Components/TodoList'

export const App = () => {
  const todos = ["Hello here", "Hello here again", "Hello here for third time"];
  return (
    <div>
      <TodoList
        initialTodos={todos}
      />
    </div>

  )
}
