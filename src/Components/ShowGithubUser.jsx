import React from 'react';
import GithubUser from './GithubUser';

const ShowGithubUser = ({ match }) => {
  const { username } = match.params;
  return <GithubUser username={username} />;
};

export default ShowGithubUser;