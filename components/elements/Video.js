import React from 'react';
import PropTypes from 'prop-types';

import { getStrapiMedia } from '../../utils/media';
import { mediaPropTypes } from '../../utils/types';

const Video = ({
  media = {},
  poster = '',
  className = '',
  controls = true,
  autoPlay = false,
  onHandlePlay = null,
  onHandlePause = null,
  onHandleClick = null,
  vidRef = null,
  muted = false,
  playsInline,
  loop = false,
  preload = 'auto',
  width = 'auto',
  height = 'auto',
}) => {
  const fullVideoUrl = getStrapiMedia(media.url);
  const fullPosterUrl = getStrapiMedia(poster?.url);

  return (
    <video
      className={className}
      poster={fullPosterUrl}
      controls={controls}
      autoPlay={autoPlay}
      onPlay={onHandlePlay}
      onPause={onHandlePause}
      onClick={onHandleClick}
      ref={vidRef}
      muted={muted}
      playsInline={playsInline}
      loop={loop}
      preload={preload}
      width={width}
      height={height}
    >
      <source src={fullVideoUrl} type={media.mime} />
    </video>
  );
};

Video.propTypes = {
  media: mediaPropTypes.isRequired,
  poster: mediaPropTypes,
  className: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

export default Video;
