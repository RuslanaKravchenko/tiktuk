import React from 'react';
import NextImage from 'next/image';

interface IMedia {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}

type TImageProps = {
  media: IMedia;
  className: string;
};

const Image: React.FC<TImageProps> = ({ media, className }) => {
  const { url, alternativeText, width, height } = media;

  return (
    <NextImage
      src={url}
      alt={alternativeText || ''}
      className={className}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={url}
    />
  );
};

export default Image;
