import React from 'react';

const Notification = ({ notification }) => {

  // override CSS
  const successStyle = {
    color: '#270',
    backgroundColor: '#DFF2BF'
  };

  const errorStyle = {
    color: '#D8000C',
    backgroundColor: '#FFBABA'
  };

  if (notification.show) {
    return (
      <div style={notification.isSuccess ? successStyle : errorStyle} className="notification">
        {notification.isSuccess ? <i className="fa fa-check icon-margin" /> : <i className="fa fa-times-circle icon-margin" />}
        {notification.message ? notification.message : 'hello from notification'}
      </div>
    );
  }

  return null;
};

export default Notification;
