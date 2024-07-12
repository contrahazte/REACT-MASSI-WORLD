import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users${username}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  return user;
};

export default useGithubUser;