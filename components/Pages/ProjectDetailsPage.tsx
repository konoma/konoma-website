import React from 'react';
import { ProjectDetailsPageType } from '../../@types';

interface ProjectsPageProps {
  page: ProjectDetailsPageType;
}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const { page } = props;

  return <div className="border-b border-indigo-300"></div>;
};

export default ProjectsPage;
