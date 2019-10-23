import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartPage from './components/StartPage';
import UserPage from './components/UserPage';

import './app.css';

const App = () => (
  <Router>
    <Route exact path="/" render={() => <StartPage />} />
    <Route exact path="/users/:user" render={({ match }) => <UserPage user={match.params.user} />} />
  </Router>
);

export default App;
