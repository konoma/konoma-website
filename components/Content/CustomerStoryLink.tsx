import DatoCMSImage from '@components/Media/DatoCMSImage';
import PageLink from '@components/Navigation/PageLink';
import React from 'react';
import { CustomerStoryEntryType } from '../../@types';

export enum AlignmentEnum {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

interface CustomerStoryLinkProps {
  story: CustomerStoryEntryType;
  imageAlignment?: AlignmentEnum;
}

const CustomerStoryLink: React.FunctionComponent<CustomerStoryLinkProps> = (props) => {
  const { imageAlignment = AlignmentEnum.RIGHT, story } = props;

  return (
    <div
      className={`flex flex-col-reverse gap-8 xl:gap-36 lg:items-center mt-20 mb-20 ${
        imageAlignment === AlignmentEnum.LEFT ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div>
        <h3 className="text-indigo-700 font-serif text-2xl mb-10">{story.customerStory.title}</h3>
        <p className="font-medium mb-10 text-xl">{story.customerStory.question}</p>
        <PageLink href={story.customerStory.slug} label={story.ctaLabel} />
      </div>

      <div className="w-75 lg:w-150 h-56 md:h-112 flex-none">
        <DatoCMSImage image={story.teaserImage} />
      </div>
    </div>
  );
};

export default CustomerStoryLink;
