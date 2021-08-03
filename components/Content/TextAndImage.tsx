import DatoCMSImage from '@components/Media/DatoCMSImage';
import PageLink from '@components/Navigation/PageLink';
import Text from '@components/Text/Text';
import React from 'react';
import { ImageType, ProjectLinkType } from '../../@types';
import { AlignmentEnum } from '../../@types/enum';

interface TextAndImageProps {
  title?: string;
  description: string;
  projectLink?: ProjectLinkType;
  image: ImageType;
  imageAlignment?: AlignmentEnum;
}

const TextAndImage: React.FunctionComponent<TextAndImageProps> = (props) => {
  const { title = null, description, projectLink = null, image, imageAlignment = AlignmentEnum.RIGHT } = props;

  return (
    <div
      className={`flex flex-col-reverse gap-8 xl:gap-36 lg:items-center mt-20 mb-20 ${
        imageAlignment === AlignmentEnum.LEFT ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div>
        {title !== null && <h3 className="text-indigo-700 font-serif text-2xl mb-10">{title}</h3>}

        <Text>{description}</Text>

        {projectLink !== null && <PageLink href={projectLink.slug} label={projectLink.referenceLabel} />}
      </div>

      <div className="max-w-xl flex-none">
        <DatoCMSImage image={image} />
      </div>
    </div>
  );
};

export default TextAndImage;
