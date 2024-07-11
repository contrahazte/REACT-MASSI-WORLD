import React, { useState } from 'react';
import './container.css';

function Container({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <h1 onClick={handleCollapse}>{title}</h1>
      {!isCollapsed && children}
    </div>
  );
}

export default Container;