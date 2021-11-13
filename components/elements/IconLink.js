import React from 'react';
import CustomLink from './CustomLink';
import Image from './Image';

const IconLink = ({ data: { url, image, newTab } }) => {
  return (
    <CustomLink
      link={{
        url: url,
        newTab: newTab,
      }}
      className='iconLink'
    >
      {image && image.url ? <Image media={image} /> : null}
    </CustomLink>
  );
};

export default IconLink;
