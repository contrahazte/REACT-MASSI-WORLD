import React from 'react';
import AlertClock from './Components/AlertClock';

function App() {
  const handleAlertButtonClick = () => {
    alert('Button clicked!'); // Replace with your desired alert behavior
  };

  return (
    <div className="App">
      <h1>Alert Clock Example</h1>
      <AlertClock onButtonClick={handleAlertButtonClick} />
    </div>
  );
}

export default App;