/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const StartPage = (props) => {
  const history = useHistory();
  const parent = {
    height: '150px',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    history.push(`/users/${name}`);
  };

  return (
    <div style={parent} className="container">
      <form className="start-box" onSubmit={handleSubmit}>
        <h2>ColorSaver</h2>
        <TextField style={{ margin: '10px' }} type="text" name="user" label="Name" id="name" />
        <Button type="submit" variant="outlined">Go</Button>
      </form>
    </div>
  );
};

export default StartPage;
