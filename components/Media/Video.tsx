import React from 'react';
import { VideoType } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface VideoProps extends BaseComponentProps, React.HtmlHTMLAttributes<HTMLVideoElement> {
  source: VideoType;
}

const Video: React.FC<VideoProps> = (props) => {
  const { className, source, ...videoProps } = props;

  return (
    <video {...videoProps}>
      <source src={source.streamingUrl} />
      <source src={source.mp4Url} type="video/mp4" />
    </video>
  );
};

export default Video;
