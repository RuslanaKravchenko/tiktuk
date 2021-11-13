import React from 'react';
import classNames from 'classnames';

import CustomLink from './CustomLink';

const ButtonLink = ({
  text,
  size = 'normal',
  type = 'primary',
  url,
  newTab,
  download = false,
  icon = null,
  animation = false,
}) => {
  const classes = classNames({
    btn: true,
    [`btn--${size}`]: true,
    [`btn--${type}`]: true,
    [`btn--animation`]: animation,
  });

  return (
    <CustomLink
      className='buttonLink'
      link={{
        url,
        newTab,
        download,
      }}
    >
      <div className={classes}>
        {text}
        {icon}
      </div>
    </CustomLink>
  );
};

export default ButtonLink;
