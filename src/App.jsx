import React from 'react';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter Example</h1>
      <Counter initialCount={0} decrementAmount={1} /> {/* Customize initialCount and decrementAmount */}
    </div>
  );
}

export default App;