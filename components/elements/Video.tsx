import React from 'react';

interface IPoster {
  url: string;
}

interface IMedia {
  url: string;
  alternativeText: string;
  width: number;
  height: number;
  mime: string;
}

type TVideoProps = {
  media: IMedia;
  poster?: IPoster | null;
  className?: string;
  controls: boolean;
  autoPlay: boolean;
  onHandlePlay?(): void;
  onHandlePause?(): void;
  onHandleClick?(): void;
  vidRef?: React.LegacyRef<HTMLVideoElement>;
  muted?: boolean;
  playsInline?: boolean;
  loop?: boolean;
  preload?: string;
  width?: string;
  height?: string;
};

const Video: React.FC<TVideoProps> = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = false,
  onHandlePlay,
  onHandlePause,
  onHandleClick,
  vidRef,
  muted = false,
  playsInline,
  loop = false,
  preload = 'auto',
  width = 'auto',
  height = 'auto',
}) => {
  return (
    <video
      className={className}
      poster={poster?.url}
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
      <source src={media.url} type={media.mime} />
    </video>
  );
};

export default Video;
