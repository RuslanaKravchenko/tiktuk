import React from 'react';
import classNames from 'classnames';

type TButtonProps = {
  text: string;
  onClick(): void;
  size?: string;
  type?: string;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const Button: React.FC<TButtonProps> = ({
  text,
  icon,
  onClick,
  className = '',
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
