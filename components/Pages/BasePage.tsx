import SiteFooter from '@components/Layout/SiteFooter';
import MetaTags from '@components/MetaTags';
import Header from '@components/Header/Header';
import React from 'react';
import { DatoCMSResponseType } from '../../@types';

interface BasePageProps {
  pageAndSite: DatoCMSResponseType<any>;
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = (props) => {
  const { pageAndSite, children } = props;

  const seoMetaTags = pageAndSite.page.seoMetaTags || [];
  const faviconMetaTags = pageAndSite.site.faviconMetaTags || [];
  const pagePerLocales = pageAndSite.page.allSlugLocales;
  const companyInformation = pageAndSite.companyInformation;
  const footerInformation = pageAndSite.footerInformation;

  return (
    <>
      <MetaTags seoMetaTags={seoMetaTags} faviconMetaTags={faviconMetaTags} currentPagePerLocal={pagePerLocales} />

      <Header currentPagePerLocale={pagePerLocales} />

      <div>
        {children}

        <SiteFooter companyInformation={companyInformation} footerInformation={footerInformation} />
      </div>
    </>
  );
};

export default BasePage;
