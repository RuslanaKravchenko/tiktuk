import React from 'react';
import { getStrapiMedia } from '../../utils/media';
import PropTypes from 'prop-types';
import { mediaPropTypes } from '../../utils/types';
import NextImage from 'next/image';

const Image = ({ media, className }) => {
  const { url, alternativeText, width, height } = media;
  const fullUrl = getStrapiMedia(url);

  return (
    <NextImage
      src={fullUrl}
      alt={alternativeText || ''}
      className={className}
      width={width}
      height={height}
      objectFit={true}
      placeholder='blur'
      blurDataURL={fullUrl}
    />
  );
};

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  className: PropTypes.string,
};

export default Image;
