import React, { useState } from 'react';
import './app.css';

const App = (props) => {
    const state = useState('Hello world');

    return (<h1 id="startup">{state}</h1>
    );
};

export default App;
