import BasePage from '@components/Pages/BasePage';
import ProjectPage from '@components/Pages/ProjectPage';
import { getAllProjectSlugs, getProjectPageAndSite } from '@lib/datocms/datocms-project';
import { SUPPORTED_LOCALES } from '@lib/defaults';
import { GetLocale, GetPreview, GetSlug } from '@lib/helpers';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DatoCMSResponseType, ProjectDetailsPageType, SlugRouteType } from '../../@types';

interface PageContent {
  pageAndSite: DatoCMSResponseType<ProjectDetailsPageType>;
  activeLocale: string;
}

const Project = ({ pageAndSite, activeLocale }: PageContent) => {
  return (
    <BasePage pageAndSite={pageAndSite}>
      <ProjectPage page={pageAndSite.page} />
    </BasePage>
  );
};
export default Project;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps = async (context) => {
  const activeLocale = GetLocale(context.locale);
  const isPreview = GetPreview(context.preview);
  const slug = GetSlug(context.params as SlugRouteType);

  if (slug === null) {
    return {
      notFound: true,
    };
  }

  const pageAndSite = await getProjectPageAndSite(slug, activeLocale, isPreview);

  console.log(JSON.stringify(pageAndSite));

  return {
    props: { pageAndSite, activeLocale },
  };
};

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];

  for (const supportedLocale of SUPPORTED_LOCALES) {
    const allProjectSlugs = await getAllProjectSlugs(supportedLocale);
    allProjectSlugs.allProjects.forEach((projectSlug) => {
      paths.push({ params: { slug: projectSlug.slug }, locale: supportedLocale });
    });
  }

  return {
    paths: paths,
    fallback: false,
  };
};
