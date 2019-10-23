import React from 'react';


const Color = ({ color }) => {
  const style = {
    backgroundColor: color
  };

  return (
    <div style={style} className="color" />
  );
};

export default Color;
