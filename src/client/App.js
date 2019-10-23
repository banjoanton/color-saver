import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartPage from './components/StartPage';
import UserPage from './components/UserPage';

import './app.css';

const App = () => {
  const [user, setUser] = useState(null);

  // if (user) {
  //   return <div><UserPage user={user} /></div>;
  // }

  // return (
  //   <div>
  //     <StartPage setUser={setUser} />
  //   </div>
  // );

  return (
    <Router>
      <Route exact path="/" render={() => <StartPage setUser={setUser} />} />
      <Route exact path="/users/:user" render={({ match }) => <UserPage user={match.params.user} />} />
    </Router>
  );
};

export default App;
