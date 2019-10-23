import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Color from './Color';

const UserPage = ({ user }) => {
  // override css
  const parent = {
    minHeight: '100px',
  };

  // handle adding a new color
  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: add new color
    console.log('submit');
  };

  return (
    <div style={parent} className="container">

      <div className="color-box">
        <Color color="gray" />
        <Color color="purple" />
      </div>

      <form className="color-input" onSubmit={handleSubmit}>
        <TextField type="text" name="color" label="Color" id="color-input" />
        <Button type="submit" variant="outlined">Add</Button>
      </form>

    </div>
  );
};

export default UserPage;
