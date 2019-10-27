import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { onErrorResumeNext } from 'rxjs';
import colorService from '../services/colorService';


const ColorClass = require('color');


const Color = ({
  color, setNotification, setColors, colors, user
}) => {
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
    // copy to clipboard
    navigator.clipboard.writeText(color);

    // add copy notification
    setNotification({ isSuccess: true, show: true, message: `Copied ${color}` });
    setTimeout(() => {
      setNotification({ isSuccess: null, show: false, message: null });
    }, 2000);
  };

  // handle right click
  const handleRightClick = (event) => {
    event.preventDefault();

    // get color to delete
    const colorToDelete = event.target.getAttribute('data-color');

    // remove color locally
    setColors(colors.filter((color) => color !== colorToDelete));

    try {
      // remove from database
      colorService.removeColor(colorToDelete, user);

      setNotification({ isSuccess: true, show: true, message: `Removed ${color}` });
      setTimeout(() => {
        setNotification({ isSuccess: null, show: false, message: null });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ColorButton role="presentation" data-color={colorClass.hex()} onContextMenu={handleRightClick} onClick={handleClick} className="color">
      {/* <p id="in-color-text">COPY / REMOVE</p> */}
    </ColorButton>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired
};

export default Color;
