import React from 'react';
import { Welcome } from './Components/Welcome';

function App() {
  const name = 'Juan'; // Puedes cambiar esto según tus necesidades
  const age = 30; // Cambia la edad también

  return (
    <div className="App">
      <Welcome name={name} age={age} />
    </div>
  );
}

export default App;