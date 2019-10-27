import React from 'react';

import Color from './Color';


const ColorBox = ({
 colors, setNotification, setColors, user
}) => {
  // turn all colors to html elements
  const allColors = colors.map((color, index) => (
    <Color user={user} colors={colors} setColors={setColors} setNotification={setNotification} key={index} color={color} />
  ));


  // return this if no colors for the user
  if (colors.length === 0) {
    return (<div>no colors found</div>);
  }

  // return box with all colors if there are colors
  return (
    <div className="color-box">
      {allColors}
    </div>
  );
};

export default ColorBox;
