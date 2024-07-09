import React, { useState } from 'react';

const AlertClock = ({ onButtonClick }) => {
  const [currentTime, setCurrentTime] = useState('');

  const handleButtonClick = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
    onButtonClick(); // Call the parent component's event handler
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Current Time</button>
      {currentTime && <p>Current time: {currentTime}</p>}
    </div>
  );
};

export default AlertClock;