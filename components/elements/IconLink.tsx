import React from 'react';
import CustomLink from './CustomLink';
import Image from './Image';

interface IImage {
  [key: string]: any;
}

interface IData {
  url: string;
  image: IImage;
  newTab: boolean;
}

type TIconLinkProps = {
  data: IData;
};

const IconLink: React.FC<TIconLinkProps> = ({
  data: { url, image, newTab },
}) => {
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
