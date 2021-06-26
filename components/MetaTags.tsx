import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import { SeoMetaTagType } from 'react-datocms/dist/types/Seo';
import { LocaleAndValueType } from '../@types';

interface MetaTagsProps {
  seoMetaTags: SeoMetaTagType[];
  faviconMetaTags: SeoMetaTagType[];
  currentPagePerLocal: LocaleAndValueType[];
}

const MetaTags = ({ seoMetaTags, faviconMetaTags, currentPagePerLocal }: MetaTagsProps) => {
  const router = useRouter();
  const defaultLocale = router.defaultLocale;

  const hrefLanguages: React.ReactNode[] = [];
  currentPagePerLocal.forEach((localeAndRoute) => {
    let localizedRoute = localeAndRoute.value;

    if (localeAndRoute.locale !== defaultLocale) {
      localizedRoute = '/' + localeAndRoute.locale + localizedRoute;
    }

    hrefLanguages.push(<link rel="alternate" key={localizedRoute} hrefLang={localeAndRoute.locale} href={localizedRoute} />);
  });

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {renderMetaTags(seoMetaTags.concat(faviconMetaTags))}

      {hrefLanguages}
    </Head>
  );
};
export default MetaTags;
