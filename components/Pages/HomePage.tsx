import CTA from '@components/Content/CTA';
import CustomerStoryLink from '@components/Content/CustomerStoryLink';
import Passions from '@components/Content/Passions';
import Video from '@components/Media/Video';
import Lead from '@components/Text/Lead';
import Slogan from '@components/Text/Slogan';
import SubTitle from '@components/Text/SubTitle';
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
      <div className="max-w-7xl mx-auto mb-16">
        <div className="max-w-3xl">
          <Slogan>{page.slogan}</Slogan>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-row">
        <div className="flex-1 mr-3">
          <Lead>{page.lead}</Lead>
        </div>

        <div className="flex-1 ml-3">
          {/* @ts-ignore */}
          <Video source={page.mainAnimationVideo.video} autoPlay={true} loop={true} muted={true} playsInline={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-16 -mt-48">
        <SubTitle>{page.passionTitle}</SubTitle>
        <Passions passions={page.passions} />
      </div>

      <div className="max-w-7xl mx-auto">
        {page.customerStories.map((story) => {
          return <CustomerStoryLink key={story.id} story={story} />;
        })}
      </div>

      <CTA cta={cta} />
    </div>
  );
};

export default HomePage;
