import {
  fetchAPI,
  FRAGMENT_COMPANY_INFORMATION,
  FRAGMENT_CTA,
  FRAGMENT_FOOTER_INFORMATION,
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
        
        customerStories {
          id
          ctaLabel
          teaserImage {
            responsiveImage(imgixParams: { w: 1200 }) {
              ...responsiveImageFragment
            }
          }
          
          customerStory {
            slug
            title
            question
          }
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
  `;

  return fetchAPI<DatoCMSResponseType<HomePageType>>(
    query,
    {
      locale: locale,
    },
    preview,
  );
};
