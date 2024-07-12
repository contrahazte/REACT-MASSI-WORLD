import React, { useEffect, useState } from 'react';

const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <img src={user.avatar_url} alt={user.name} />
    </div>
  );
};

export default GithubUser;