import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import ColorBox from './ColorBox';

import userService from '../services/userService';

const UserPage = ({ user }) => {
  const [colors, setColors] = useState([]);
  const [hasMadeQuery, setHasMadeQuery] = useState(false);

  // get colors for user
  useEffect(() => {
    async function fetchData() {
      const downloadedUser = await userService.getUser(user);
      const userColors = downloadedUser.colors.map((colorArray) => colorArray.color);
      setColors(userColors);
      setHasMadeQuery(true);
    }
    fetchData();
  }, []);

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

      {hasMadeQuery ? <ColorBox colors={colors} /> : (<CircularProgress />)}

      <form className="color-input" onSubmit={handleSubmit}>
        <TextField type="text" name="color" label="Color" id="color-input" />
        <Button type="submit" variant="outlined">Add</Button>
      </form>

    </div>
  );
};

export default UserPage;
