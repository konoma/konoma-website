import CustomerStoryLink from '@components/Content/CustomerStoryLink';
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
      {stories.map((story) => {
        return <CustomerStoryLink key={story.id} story={story} />;
      })}
    </ContentRow>
  );
};

export default CustomerStoryLinks;
