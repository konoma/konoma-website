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

  return (
    <div className="mt-28">
      <div className="max-w-4xl mx-auto mb-16">
        <Slogan>{page.slogan}</Slogan>
      </div>

      <div className="max-w-4xl mx-auto flex flex-row">
        <div className="flex-1 mr-3">
          <Lead className="mt-8">{page.lead}</Lead>
        </div>

        <div className="flex-1 ml-3">
          <Video source={page.mainAnimationVideo.video} autoPlay={true} loop={true} muted={true} playsInline={true} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16 -mt-24">
        <SubTitle>{page.passionTitle}</SubTitle>
        <Passions passions={page.passions} />
      </div>

      <div className="max-w-4xl mx-auto">
        {page.customerStories.map((story) => {
          return (
            <div key={story.id}>
              <h3>{story.customerStory.title}</h3>
              <p>{story.howMightWeQuestion}</p>
              <p>{story.ctaLabel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
