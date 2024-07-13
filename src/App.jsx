import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowGithubUser from './Components/ShowGithubUser';

const App = () => (
  <Router>
    {/* Other routes... */}
    <Route path="/users/:username" component={ShowGithubUser} />
  </Router>
);

export default App;