import ProjectLinks from '@components/Content/ProjectLinks';
import ContentRow from '@components/Layout/ContentRow';
import LimitedWithBlock from '@components/Layout/LimitedWithBlock';
import DatoCMSImage from '@components/Media/DatoCMSImage';
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
        <LimitedWithBlock>
          <Title className="mb-16">{page.title}</Title>
          <Lead className="mb-32">{page.lead}</Lead>
        </LimitedWithBlock>
      </ContentRow>

      <ProjectLinks projects={page.projects} />

      <ContentRow>
        <LimitedWithBlock className="mb-8 md:mb-16">
          <SubTitle>{page.otherClientsTitle}</SubTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
            {page.clientLogos.map((clientLogo, index) => {
              return (
                <div key={index} className="w-25">
                  <DatoCMSImage image={clientLogo} />
                </div>
              );
            })}
          </div>
        </LimitedWithBlock>
      </ContentRow>
    </div>
  );
};

export default ProjectsPage;
