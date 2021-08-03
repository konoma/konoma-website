import BasePage from '@components/Pages/BasePage';
import ProjectsPage from '@components/Pages/ProjectsPage';
import { getProjectsPageAndSite } from '@lib/datocms/datocms-projects';
import { GetLocale, GetPreview } from '@lib/helpers';
import { GetStaticProps } from 'next';
import { DatoCMSResponseType, ProjectsPageType } from '../@types';

interface PageContent {
  pageAndSite: DatoCMSResponseType<ProjectsPageType>;
  activeLocale: string;
}

const Projects = ({ pageAndSite, activeLocale }: PageContent) => {
  return (
    <BasePage pageAndSite={pageAndSite}>
      <ProjectsPage page={pageAndSite.page} />
    </BasePage>
  );
};
export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  const activeLocale = GetLocale(context.locale);
  const isPreview = GetPreview(context.preview);
  const pageAndSite = await getProjectsPageAndSite(activeLocale, isPreview);

  return {
    props: { pageAndSite, activeLocale },
  };
};
