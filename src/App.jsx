import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShowGithubUser from './Components/ShowGithubUser';

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

      {/* Other routes... */}
      <Route path="/users/:username" component={ShowGithubUser} />
    </div>
  </Router>
);

export default App;