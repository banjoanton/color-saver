import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Color from './Color';

import userService from '../services/users';

const UserPage = ({ user }) => {
  const [colors, setColors] = useState(['blue', 'green', 'pink']);
  // override css
  const parent = {
    minHeight: '100px',
  };

  // get user data
  // const colorsExample = userService.getUser(user);

  // itterate over colors
  const allColors = colors.map((color, index) => (
    <Color key={index} color={color} />
  ));

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

      <div className="color-box">
        {allColors}
      </div>

      <form className="color-input" onSubmit={handleSubmit}>
        <TextField type="text" name="color" label="Color" id="color-input" />
        <Button type="submit" variant="outlined">Add</Button>
      </form>

    </div>
  );
};

export default UserPage;
