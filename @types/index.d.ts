import { SeoMetaTagType } from 'react-datocms/dist/types/Seo';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface PageAndSite {
  page: any;
  site: any;
}

interface LocaleAndValue {
  locale: string;
  value: string;
}

interface Page {
  seoMetaTags: SeoMetaTagType[];
  allSlugLocales: LocaleAndValue[];
}

interface Site {
  faviconMetaTags: SeoMetaTagType[];
}

interface DatoCMSResponse {
  page: Page;
  site: Site;
}
