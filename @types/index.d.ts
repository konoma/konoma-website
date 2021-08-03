import { ParsedUrlQuery } from 'querystring';
import { ResponsiveImageType } from 'react-datocms/dist/types/Image';
import { SeoMetaTagType } from 'react-datocms/dist/types/Seo';
import { PassionIconCodeEnum } from './enum';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface AllProjectSlugsType {
  allProjects: SlugRouteType[];
}

interface SlugRouteType extends ParsedUrlQuery {
  slug: string;
}

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

interface CustomerDetailsType extends CustomerShortType {
  logo: ImageType;
}

interface ProjectShortType {
  slug: string;
  title: string;
  question: string;
  customer: CustomerShortType;
  referenceLabel: string;
  referenceImage: ImageType;
}

interface ProjectDetailsType extends ProjectShortType {
  customer: CustomerDetailsType;
  heroImage: ImageType;
  content: ModelApiKeyType[];
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

interface ProjectDetailsPageType extends ProjectDetailsType {}

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

interface ProjectLinkType extends LinkType {
  referenceLabel: string;
}

interface ModelApiKeyType {
  id: string;
  _modelApiKey: string;
}

interface SubTitleRecordType extends ModelApiKeyType {
  subtitle: string;
}

interface TextRecordType extends ModelApiKeyType {
  text: string;
}

interface TextAndImageBlockRecordType extends ModelApiKeyType {
  title: string;
  description: string;
  image: ImageType;
  imageAlignment: string;
  projectLink: ProjectLinkType;
}
