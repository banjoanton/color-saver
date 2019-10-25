import React from 'react';
import useHover from 'react-use-hover';

const ColorClass = require('color');


const Color = ({ color }) => {
  const [isHovering, hoverProps] = useHover();
  // get class for color
  const colorClass = ColorClass(color);

  // override CSS color
  const style = {
    backgroundColor: color,
  };

  // override CSS when hovering
  const hoverStyle = {
    backgroundColor: colorClass.darken(0.7)
  };


  return (
    <div role="presentation" {...hoverProps} onClick={() => console.log(color)} style={isHovering ? hoverStyle : style} className="color">
      {isHovering ? <p id="in-color-text">COPY</p> : null}
    </div>
  );
};

export default Color;
