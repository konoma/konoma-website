import ProjectLink, { AlignmentEnum } from '@components/Content/ProjectLink';
import ContentRow from '@components/Layout/ContentRow';
import React from 'react';
import { ProjectShortType } from '../../@types';

interface ProjectLinksProps {
  projects: ProjectShortType[];
}

const ProjectLinks: React.FunctionComponent<ProjectLinksProps> = (props) => {
  const { projects } = props;

  return (
    <ContentRow>
      {projects.map((project, index) => {
        return (
          <ProjectLink key={project.slug} project={project} imageAlignment={index % 2 === 0 ? AlignmentEnum.RIGHT : AlignmentEnum.LEFT} />
        );
      })}
    </ContentRow>
  );
};

export default ProjectLinks;
