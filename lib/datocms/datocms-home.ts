import {
  fetchAPI,
  FRAGMENT_COMPANY_INFORMATION,
  FRAGMENT_CTA,
  FRAGMENT_FOOTER_INFORMATION,
  FRAGMENT_PROJECT_SHORT,
  FRAGMENT_RESPONSIVE_IMAGE,
  FRAGMENT_SLUG_LOCALES,
  FRAGMENT_TAG,
} from '@lib/datocms/datocms-common';
import { DatoCMSResponseType, HomePageType } from '../../@types';

export const getHomePageAndSite = async (locale: string, preview: boolean): Promise<DatoCMSResponseType<HomePageType>> => {
  const query = `
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
        
        projects {
          ...projectShortFragment
        }
        
        cta {
          ...ctaFragment
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
      
      footerInformation: footerInformation(locale: $locale) {
        ...footerInformationFragment
      }
      
      site: _site(locale: $locale) {
        faviconMetaTags {
          ...tagFragment
        }
      }
    }
    ${FRAGMENT_RESPONSIVE_IMAGE}
    ${FRAGMENT_COMPANY_INFORMATION}
    ${FRAGMENT_FOOTER_INFORMATION}
    ${FRAGMENT_SLUG_LOCALES}
    ${FRAGMENT_TAG}
    ${FRAGMENT_CTA}
    ${FRAGMENT_PROJECT_SHORT}
  `;

  return fetchAPI<DatoCMSResponseType<HomePageType>>(
    query,
    {
      locale: locale,
    },
    preview,
  );
};
