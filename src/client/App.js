import React, { useState } from 'react';
import StartPage from './components/StartPage';
import UserPage from './components/UserPage';

import './app.css';

const App = () => {
  const [user, setUser] = useState(null);

  if (user) {
    return <div><UserPage user={user} /></div>;
  }

  return (
    <div>
      <StartPage setUser={setUser} />
    </div>
  );
};

export default App;
