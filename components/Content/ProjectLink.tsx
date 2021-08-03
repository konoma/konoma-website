import DatoCMSImage from '@components/Media/DatoCMSImage';
import PageLink from '@components/Navigation/PageLink';
import React from 'react';
import { ProjectShortType } from '../../@types';
import { AlignmentEnum } from '../../@types/enum';

interface ProjectLinkProps {
  project: ProjectShortType;
  imageAlignment?: AlignmentEnum;
}

const ProjectLink: React.FunctionComponent<ProjectLinkProps> = (props) => {
  const { imageAlignment = AlignmentEnum.RIGHT, project } = props;

  return (
    <div
      className={`flex flex-col-reverse gap-8 xl:gap-36 lg:items-center mt-20 mb-20 ${
        imageAlignment === AlignmentEnum.LEFT ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div>
        <h3 className="text-indigo-700 font-serif text-2xl mb-10">{`${project.customer.name} - ${project.title}`}</h3>
        <p className="font-medium mb-10 text-xl">{project.question}</p>
        <PageLink href={project.slug} label={project.referenceLabel} />
      </div>

      <div className="w-75 lg:w-150 h-56 md:h-112 flex-none">
        <DatoCMSImage image={project.referenceImage} />
      </div>
    </div>
  );
};

export default ProjectLink;
