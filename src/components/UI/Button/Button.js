import React from 'react';

import classes from '../../../CSS/Button.module.css';

const Button = ({className, disabled, onClick, type, children}) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
