import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ColorClass = require('color');


const Color = ({ color, setNotification }) => {
  // get class for color
  const colorClass = ColorClass(color);

  // create styled div
  const ColorButton = styled.div`
    background-color: ${colorClass.hex()};
    color: ${colorClass.hex()};
          &:hover {
            background-color: ${colorClass.darken(0.7).hex()};
            color: white;
  `;

  // handle click
  const handleClick = (event) => {
    console.log('TCL: --------------------------------');
    console.log('TCL: handleClick -> color', color);
    console.log('TCL: --------------------------------');

    // copy to clipboard
    navigator.clipboard.writeText(color);

    // add notification
    setNotification({ isSuccess: true, show: true, message: `Copied ${color}` });
    setTimeout(() => {
      setNotification({ isSuccess: null, show: false, message: null });
    }, 5000);
  };

  // handle right click
  const handleRightClick = (event) => {
    event.preventDefault();
    console.log('right click');
  };


  return (
    <ColorButton role="presentation" onContextMenu={handleRightClick} onClick={handleClick} className="color">
      {/* <p id="in-color-text">COPY / REMOVE</p> */}
    </ColorButton>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired
};

export default Color;
