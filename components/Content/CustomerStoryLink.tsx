import PageLink from '@components/Navigation/PageLink';
import React from 'react';
import { Image } from 'react-datocms';
import { CustomerStoryEntryType } from '../../@types';

interface CustomerStoryLinkProps {
  story: CustomerStoryEntryType;
}

const CustomerStoryLink: React.FunctionComponent<CustomerStoryLinkProps> = (props) => {
  const { story } = props;

  return (
    <div className="flex gap-48 mt-20 mb-20 items-center">
      <div>
        <h3 className="text-indigo-700 font-serif text-2xl mb-10">{story.customerStory.title}</h3>
        <p className="font-medium mb-10 text-xl">{story.customerStory.question}</p>
        <PageLink href={story.customerStory.slug} label={story.ctaLabel} />
      </div>

      <div>
        <Image data={story.teaserImage.responsiveImage} />
      </div>
    </div>
  );
};

export default CustomerStoryLink;
