import { fetchAPI, FRAGMENT_COMPANY_INFORMATION, FRAGMENT_SLUG_LOCALES, FRAGMENT_TAG } from '@lib/datocms/datocms-common';
import { DatoCMSResponseType, HomePageType } from '../../@types';

export const getHomePageAndSite = async (locale: string, preview: boolean): Promise<DatoCMSResponseType<HomePageType>> => {
  return fetchAPI<DatoCMSResponseType<HomePageType>>(
    `
    query HomePageAndSite($locale: SiteLocale) {
      page: homePage(locale: $locale) {
        slogan
        lead
        mainAnimationVideo {
          video {
            streamingUrl
            mp4Url
          }
        }
        
        passionTitle
        passions {
          id
          iconCode
          description
        }
        
        customerStories {
        id
          ctaLabel
          howMightWeQuestion
          customerStory {
            slug
            title
          }
        }
        
        seoMetaTags: _seoMetaTags {
          ...tagFragment
        }
        
        allSlugLocales: _allSlugLocales {
          ...slugLocalesFragment
        }
      }
      
      companyInformation: companyInformation(locale: $locale) {
        ...companyInformationFragment
      } 
      
      site: _site(locale: $locale) {
        faviconMetaTags {
          ...tagFragment
        }
      }
    }
    ${FRAGMENT_COMPANY_INFORMATION}
    ${FRAGMENT_SLUG_LOCALES}
    ${FRAGMENT_TAG}
  `,
    {
      locale: locale,
    },
    preview,
  );
};
