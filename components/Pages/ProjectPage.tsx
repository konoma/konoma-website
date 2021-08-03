import TextAndImage from '@components/Content/TextAndImage';
import ContentRow from '@components/Layout/ContentRow';
import LimitedWithBlock from '@components/Layout/LimitedWithBlock';
import DatoCMSImage from '@components/Media/DatoCMSImage';
import Lead from '@components/Text/Lead';
import SubTitle from '@components/Text/SubTitle';
import Title from '@components/Text/Title';
import React from 'react';
import { ProjectDetailsPageType, SubTitleRecordType, TextAndImageBlockRecordType, TextRecordType } from '../../@types';
import { AlignmentEnum } from '../../@types/enum';

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

      <ContentRow>
        {page.content.map((value) => {
          if (value._modelApiKey === 'subtitle') {
            const subtitle = value as SubTitleRecordType;
            return <SubTitle key={subtitle.id}>{subtitle.subtitle}</SubTitle>;
          } else if (value._modelApiKey === 'text') {
            const text = value as TextRecordType;
            return <LimitedWithBlock key={text.id}>{text.text}</LimitedWithBlock>;
          } else if (value._modelApiKey === 'text_and_image_block') {
            const textAndImage = value as TextAndImageBlockRecordType;
            return (
              <TextAndImage
                key={textAndImage.id}
                title={textAndImage.title}
                description={textAndImage.description}
                projectLink={textAndImage.projectLink}
                image={textAndImage.image}
                imageAlignment={textAndImage.imageAlignment === 'RIGHT' ? AlignmentEnum.RIGHT : AlignmentEnum.LEFT}
              />
            );
          }
        })}
      </ContentRow>
    </div>
  );
};

export default ProjectsPage;
