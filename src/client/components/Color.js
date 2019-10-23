import React from 'react';


const Color = ({ color }) => {
  // override CSS color
  const style = {
    backgroundColor: color
  };

  return (
    <div role="presentation" onClick={() => console.log(color)} style={style} className="color" />
  );
};

export default Color;
