import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [username, setUsername] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserList([...userList, username]);
    setUsername('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Github username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {userList.map((user, index) => (
        <GithubUser key={index} username={user} />
      ))}
    </div>
  );
};

export default GithubUsers;