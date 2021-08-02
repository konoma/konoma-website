import Image from 'next/image';
import React from 'react';
import { ResponsiveImageType } from 'react-datocms/dist/types/Image';
import { BaseComponentProps } from '../../helper/classNames';

interface NextImageProps extends BaseComponentProps {
  image: ResponsiveImageType;
}

const NextImage: React.FunctionComponent<NextImageProps> = (props) => {
  const { image } = props;

  console.log(JSON.stringify(image));

  if (image.src === undefined || image.width === undefined || image.height === undefined) {
    return <></>;
  }

  return <Image src={image.src} alt={image.alt} layout="fill" sizes={image.sizes} placeholder={image.base64} />;
};

export default NextImage;
