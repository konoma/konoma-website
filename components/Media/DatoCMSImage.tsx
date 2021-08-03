import React from 'react';
import { Image } from 'react-datocms';
import { ImageType } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface DatoCMSImageProps extends BaseComponentProps {
  image: ImageType;
}

const DatoCMSImage: React.FunctionComponent<DatoCMSImageProps> = (props) => {
  const { image } = props;

  return <Image data={image.responsiveImage} />;
};

export default DatoCMSImage;
