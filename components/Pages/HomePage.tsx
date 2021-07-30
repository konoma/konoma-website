import Passions from '@components/Content/Passions';
import Video from '@components/Media/Video';
import PageLink from '@components/Navigation/PageLink';
import Lead from '@components/Text/Lead';
import Slogan from '@components/Text/Slogan';
import SubTitle from '@components/Text/SubTitle';
import React from 'react';
import { Image } from 'react-datocms';
import { HomePageType } from '../../@types';

interface HomePageProps {
  page: HomePageType;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { page } = props;

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
          return (
            <div key={story.id} className="flex gap-48 mt-20 mb-20 items-center">
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
        })}
      </div>

      <div className="bg-indigo-900 py-32 px-56">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-white mb-16">{page.cta.title}</h2>
          <p className="text-2xl text-white mb-10 font-medium">{page.cta.description}</p>
          <PageLink href={page.cta.target.slug} label={page.cta.target.slug} color="white" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
