import React from 'react';

const UncontrolledLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username (FormData API):', username);
    console.log('Password (FormData API):', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default UncontrolledLogin;