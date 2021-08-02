import CustomerStoryLinks from '@components/Content/CustomerStoryLinks';
import ContentRow from '@components/Layout/ContentRow';
import NextImage from '@components/Media/NextImage';
import Lead from '@components/Text/Lead';
import SubTitle from '@components/Text/SubTitle';
import Title from '@components/Text/Title';
import React from 'react';
import { ProjectsPageType } from '../../@types';

interface ProjectsPageProps {
  page: ProjectsPageType;
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { page } = props;

  return (
    <div className="border-b border-indigo-300">
      <ContentRow>
        <div className="max-w-4xl">
          <Title className="mb-16">{page.title}</Title>
          <Lead className="mb-32">{page.lead}</Lead>
        </div>
      </ContentRow>

      <CustomerStoryLinks stories={page.customerStories} />

      <ContentRow>
        <div className="max-w-4xl mb-8 md:mb-16">
          {/*  w-25 h-17 */}
          <SubTitle>{page.otherClientsTitle}</SubTitle>

          <div className="grid grid-cols-4">
            {page.clientLogos.map((clientLogo, index) => {
              return (
                <div key={index} className="w-25 h-17 relative">
                  <NextImage image={clientLogo} />
                </div>
              );
            })}
          </div>
        </div>
      </ContentRow>
    </div>
  );
};

export default ProjectsPage;
