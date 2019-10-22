/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StartPage = ({ setUser }) => {
  const parent = {
    borderRadius: '25px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    background: '#ffffff',
    minHeight: '200px',
    minWidth: '300px',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '300px',
    height: '150px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    setUser(name);
  };

  const child = {
    width: '300px',
    margin: '10px'
  };

  return (
    <div style={parent}>
      <form onSubmit={handleSubmit}>
        <div style={child}>
          <h2>Color</h2>
        </div>
        <div style={child}>
          <TextField type="text" name="user" label="Name" id="name" />
        </div>
        <div style={child}>
          <Button type="submit" variant="outlined">Go</Button>
        </div>
      </form>
    </div>
  );
};

export default StartPage;
