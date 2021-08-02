import CustomerStoryLink, { AlignmentEnum } from '@components/Content/CustomerStoryLink';
import ContentRow from '@components/Layout/ContentRow';
import React from 'react';
import { CustomerStoryEntryType } from '../../@types';

interface CustomerStoryLinksProps {
  stories: CustomerStoryEntryType[];
}

const CustomerStoryLinks: React.FunctionComponent<CustomerStoryLinksProps> = (props) => {
  const { stories } = props;

  return (
    <ContentRow>
      {stories.map((story, index) => {
        return (
          <CustomerStoryLink key={story.id} story={story} imageAlignment={index % 2 === 0 ? AlignmentEnum.RIGHT : AlignmentEnum.LEFT} />
        );
      })}
    </ContentRow>
  );
};

export default CustomerStoryLinks;
