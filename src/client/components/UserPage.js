import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ColorBox from './ColorBox';

import userService from '../services/userService';

const UserPage = ({ user }) => {
  const [colors, setColors] = useState([]);
  // override css
  const parent = {
    minHeight: '100px',
  };

  // handle adding a new color
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add new color
    // TODO: Check that it is a color
    setColors([...colors, event.target.color.value]);
    event.target.color.value = '';
  };

  return (
    <div style={parent} className="container">

      <h3>{user}</h3>

      {colors.length > 0 ? <ColorBox colors={colors} /> : (<p>hello</p>)}

      <form className="color-input" onSubmit={handleSubmit}>
        <TextField type="text" name="color" label="Color" id="color-input" />
        <Button type="submit" variant="outlined">Add</Button>
      </form>

    </div>
  );
};

export default UserPage;
