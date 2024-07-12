import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const user = useGithubUser(username);

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