import SiteContent from '@components/Layout/SiteContent';
import SiteFooter from '@components/Layout/SiteFooter';
import MetaTags from '@components/MetaTags';
import NavDesktop from '@components/Navigation/NavDesktop';
import Navigation from '@components/Navigation/Navigation';
import NavMobile from '@components/Navigation/NavMobile';
import React from 'react';
import { DatoCMSResponse } from '../../@types';

interface BasePageProps {
  pageAndSite: DatoCMSResponse;
  children: React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = (props) => {
  const { pageAndSite, children } = props;

  const seoMetaTags = pageAndSite.page.seoMetaTags || [];
  const faviconMetaTags = pageAndSite.site.faviconMetaTags || [];
  const pagePerLocales = pageAndSite.page.allSlugLocales;

  return (
    <>
      <MetaTags seoMetaTags={seoMetaTags} faviconMetaTags={faviconMetaTags} currentPagePerLocal={pagePerLocales} />

      <Navigation currentPagePerLocale={pagePerLocales} />

      <SiteContent>
        {children}

        <SiteFooter />
      </SiteContent>
    </>
  );
};

export default BasePage;
