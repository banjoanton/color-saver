import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import ColorBox from './ColorBox';
import Notification from './Notification';

import userService from '../services/userService';
import colorService from '../services/colorService';

const Color = require('color');

const UserPage = ({ user }) => {
  const [colors, setColors] = useState([]);
  const [hasMadeQuery, setHasMadeQuery] = useState(false);
  const [notification, setNotification] = useState({
    isSuccess: null, show: null, message: null
  });

  // get colors for user
  useEffect(() => {
    async function fetchData() {
      // get all users
      const allUsers = await userService.getUsers();
      console.log('TCL: ------------------------------------');
      console.log('TCL: fetchData -> allUsers', allUsers);
      console.log('TCL: ------------------------------------');

      // if user does not exist, leave colors empty
      if (!allUsers.map((u) => u.user).includes(user)) {
        setHasMadeQuery(true);
        return;
      }

      // if the user exists, fetch all colors from the server
      const downloadedUser = allUsers.find((u) => u.user === user);
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
    const color = event.target.color.value;

    // check if it is a color
    let colorClass;
    try {
      // save as a color class, hex value.
      colorClass = Color(color).hex();
    } catch (exception) {
      console.log(exception);
      // return if it isnt a color. Will not proceed below.
      return;
    }

    // update colors locally
    setColors([...colors, colorClass]);
    event.target.color.value = '';

    // add to database
    colorService.addColor(colorClass, user);
  };

  return (
    <div>
      <Notification notification={notification} />
      <div style={parent} className="container">

        <h3>{user}</h3>

        {hasMadeQuery ? <ColorBox setNotification={setNotification} colors={colors} /> : (<CircularProgress />)}

        <form className="color-input" onSubmit={handleSubmit}>
          <TextField type="text" name="color" label="Color" id="color-input" />
          <Button type="submit" variant="outlined">Add</Button>
        </form>

      </div>
    </div>

  );
};

export default UserPage;
