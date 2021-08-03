import BasePage from '@components/Pages/BasePage';
import ProjectDetailsPage from '@components/Pages/ProjectDetailsPage';
import { getProjectDetailsPageAndSite } from '@lib/datocms/datocms-project-details';
import { GetLocale, GetPreview } from '@lib/helpers';
import { GetStaticProps } from 'next';
import { DatoCMSResponseType, ProjectDetailsPageType } from '../../@types';

interface PageContent {
  pageAndSite: DatoCMSResponseType<ProjectDetailsPageType>;
  activeLocale: string;
}

const Index = ({ pageAndSite, activeLocale }: PageContent) => {
  return (
    <BasePage pageAndSite={pageAndSite}>
      <ProjectDetailsPage page={pageAndSite.page} />
    </BasePage>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const activeLocale = GetLocale(context.locale);
  const isPreview = GetPreview(context.preview);
  const pageAndSite = await getProjectDetailsPageAndSite(activeLocale, isPreview);

  return {
    props: { pageAndSite, activeLocale },
  };
};
