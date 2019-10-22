import React from 'react';

const UserPage = ({ user }) => {
  console.log('UserPage');

  const parent = {
    borderRadius: '25px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    background: '#ffffff',

    minWidth: '300px',
    width: '300px',
    minHeight: '100px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-100px 0 0 -150px'

  };

  const child = {
    width: '300px',
    height: '20px',
    margin: '10px'
  };

  return (
    <div style={parent}>
      <div style={child}>
        add input here
      </div>
      <div style={child}>
        add input there
      </div>
      <div style={child}>
        add input fler
      </div>
      <div style={child}>
        add input mere
      </div>
    </div>
  );
};

export default UserPage;
