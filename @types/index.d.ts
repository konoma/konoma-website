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
}

interface CustomerStoryEntryType {
  id: string;
  howMightWeQuestion: string;
  ctaLabel: string;
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
  site: SiteType;
}
