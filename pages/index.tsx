import BasePage from '@components/Pages/BasePage';
import HomePage from '@components/Pages/HomePage';
import { getHomePageAndSite } from '@lib/datocms/datocms-home';
import { GetLocale, GetPreview } from '@lib/helpers';
import { GetStaticProps } from 'next';
import { DatoCMSResponse } from '../@types';

interface PageContent {
  pageAndSite: DatoCMSResponse;
  activeLocale: string;
}

const Index = ({ pageAndSite, activeLocale }: PageContent) => {
  return (
    <BasePage pageAndSite={pageAndSite}>
      <HomePage page={pageAndSite.page} />
    </BasePage>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const activeLocale = GetLocale(context.locale);
  const isPreview = GetPreview(context.preview);
  const pageAndSite = await getHomePageAndSite(activeLocale, isPreview);

  return {
    props: { pageAndSite, activeLocale },
  };
};
