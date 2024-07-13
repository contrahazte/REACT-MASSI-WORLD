import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ShowGithubUser from './Components/ShowGithubUser';
import GithubUserList from './Components/GithubUserList';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users/johndoe">John Doe</Link>
          </li>
          <li>
            <Link to="/users/janedoe">Jane Doe</Link>
          </li>
          <li>
            <Link to="/users/foobar">Foo Bar</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/users/:username" component={ShowGithubUser} />
        <Route path="/" component={GithubUserList} />
      </Switch>
    </div>
  </Router>
);

export default App;