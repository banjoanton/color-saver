import React from 'react';

import Color from './Color';

const ColorBox = ({ colors }) => {
  console.log(colors);

  const allColors = colors.map((color, index) => (
    <Color key={index} color={color} />
  ));

  return (
    <div className="color-box">
      {allColors}
    </div>
  );
};

export default ColorBox;
