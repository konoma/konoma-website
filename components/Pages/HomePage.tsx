import CTA from '@components/Content/CTA';
import CustomerStoryLinks from '@components/Content/CustomerStoryLinks';
import Passions from '@components/Content/Passions';
import ContentRow from '@components/Layout/ContentRow';
import Video from '@components/Media/Video';
import Lead from '@components/Text/Lead';
import Slogan from '@components/Text/Slogan';
import React from 'react';
import { HomePageType } from '../../@types';

interface HomePageProps {
  page: HomePageType;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { page } = props;
  const cta = page.cta[0];

  return (
    <div className="mt-28">
      <ContentRow className="mb-16">
        <div className="max-w-3xl">
          <Slogan>{page.slogan}</Slogan>
        </div>
      </ContentRow>

      <ContentRow className="flex flex-row">
        <div className="flex-1 mr-3">
          <Lead>{page.lead}</Lead>
        </div>

        <div className="flex-1 ml-3">
          {/* @ts-ignore */}
          <Video source={page.mainAnimationVideo.video} autoPlay={true} loop={true} muted={true} playsInline={true} />
        </div>
      </ContentRow>

      <Passions title={page.passionTitle} passions={page.passions} className="mb-16 -mt-48" />

      <CustomerStoryLinks stories={page.customerStories} />

      <CTA cta={cta} />
    </div>
  );
};

export default HomePage;
