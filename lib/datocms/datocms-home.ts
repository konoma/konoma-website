import { fetchAPI, FRAGMENT_COMPANY_INFORMATION, FRAGMENT_SLUG_LOCALES, FRAGMENT_TAG } from '@lib/datocms/datocms-common';

export const getHomePageAndSite = async (locale: string, preview: boolean): Promise<DatoCMSResponse> => {
  return fetchAPI<DatoCMSResponse>(
    `
    query HomePageAndSite($locale: SiteLocale) {
      page: homePage(locale: $locale) {
        slogan
        lead
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
