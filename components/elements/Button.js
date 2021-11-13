import React from 'react';
import classNames from 'classnames';

const Button = ({
  text,
  icon = null,
  onClick = null,
  className = null,
  size = 'normal',
  type = 'primary',
  htmlType = 'button',
  disabled = false,
}) => {
  const classes = classNames({
    btn: true,
    [className]: true,
    [`btn--${size}`]: true,
    [`btn--${type}`]: true,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
