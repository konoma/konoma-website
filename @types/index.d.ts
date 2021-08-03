import { ResponsiveImageType } from 'react-datocms/dist/types/Image';
import { SeoMetaTagType } from 'react-datocms/dist/types/Seo';
import { PassionIconCodeEnum } from './enum';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface LocaleAndValueType {
  locale: string;
  value: string;
}

interface PassionType {
  id: string;
  iconCode: PassionIconCodeEnum;
  description: string;
}

// === Media Types ===

interface VideoType {
  streamingUrl: string;
  mp4Url: string;
}

interface MainAnimationVideoType {
  video: VideoType;
}

interface ImageType {
  responsiveImage: ResponsiveImageType;
}

// === Media Types ===

interface CustomerShortType {
  name: string;
}

interface ProjectShortType {
  slug: string;
  title: string;
  question: string;
  customer: CustomerShortType;
  referenceLabel: string;
  referenceImage: ImageType;
}

interface HomePageType extends PageType {
  title: string;
  slogan: string;
  lead: string;
  mainAnimationVideo: MainAnimationVideoType;
  passionTitle: string;
  passions: PassionType[];
  projects: ProjectShortType[];
  cta: CtaType[];
}

interface ProjectsPageType extends PageType {
  title: string;
  lead: string;
  projects: ProjectShortType[];
  otherClientsTitle: string;
  clientLogos: ImageType[];
}

interface ProjectDetailsPageType extends PageType {
  title: string;
}

interface PageType {
  seoMetaTags: SeoMetaTagType[];
  allSlugLocales: LocaleAndValueType[];
}

interface SiteType {
  faviconMetaTags: SeoMetaTagType[];
}

interface DatoCMSResponseType<T> {
  page: T;
  companyInformation: CompanyInformationType;
  footerInformation: FooterInformationType;
  site: SiteType;
}

interface FooterInformationType {
  contactLabel: string;
  contactPage: LinkType;
}

interface CtaType {
  title: string;
  description: string;
  targetLabel: string;
  target: LinkType;
}

interface CompanyInformationType {
  address: string;
  companyEmail: string;
}

interface LinkType {
  slug: string;
}
