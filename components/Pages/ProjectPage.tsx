import ContentRow from '@components/Layout/ContentRow';
import DatoCMSImage from '@components/Media/DatoCMSImage';
import Lead from '@components/Text/Lead';
import Title from '@components/Text/Title';
import React from 'react';
import { ProjectDetailsPageType } from '../../@types';

interface ProjectsPageProps {
  page: ProjectDetailsPageType;
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { page } = props;

  return (
    <div className="border-b border-indigo-300">
      <ContentRow className="mb-8 lg:mb-16">
        <Title className="text-xl md:text-xl mb-6">{page.title}</Title>

        <div className="flex gap-4 md:gap-8">
          <Lead>{page.question}</Lead>

          <div className="w-100">
            <DatoCMSImage image={page.customer.logo} />
          </div>
        </div>
      </ContentRow>

      <ContentRow className="mb-8 lg:mb-16">
        <DatoCMSImage image={page.heroImage} />
      </ContentRow>

      <ContentRow></ContentRow>
    </div>
  );
};

export default ProjectsPage;
