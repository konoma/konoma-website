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

interface VideoType {
  streamingUrl: string;
  mp4Url: string;
}

interface MainAnimationVideoType {
  video: VideoType;
}

interface CustomerStoryShortType {
  slug: string;
  title: string;
  question: string;
}

interface ImageType {
  responsiveImage: ResponsiveImageType;
}

interface CustomerStoryEntryType {
  id: string;
  ctaLabel: string;
  teaserImage: ImageType;
  customerStory: CustomerStoryShortType;
}

interface HomePageType extends PageType {
  title: string;
  slogan: string;
  lead: string;
  mainAnimationVideo: MainAnimationVideoType;
  passionTitle: string;
  passions: PassionType[];
  customerStories: CustomerStoryEntryType[];
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

interface CompanyInformationType {
  address: string;
  companyEmail: string;
}

interface LinkType {
  slug: string;
}
