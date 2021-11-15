import React from 'react';
import classNames from 'classnames';

import CustomLink from './CustomLink';

type TButtonLinkProps = {
  text: string;
  url: string;
  newTab: boolean;
  download?: boolean;
  size?: string;
  type?: string;
  icon?: React.ReactNode;
  animation: boolean;
};

const ButtonLink: React.FC<TButtonLinkProps> = ({
  text,
  size = 'normal',
  type = 'primary',
  url,
  newTab,
  download = false,
  icon,
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
