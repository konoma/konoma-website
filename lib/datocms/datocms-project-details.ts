import {
  fetchAPI,
  FRAGMENT_COMPANY_INFORMATION,
  FRAGMENT_CTA,
  FRAGMENT_FOOTER_INFORMATION,
  FRAGMENT_RESPONSIVE_IMAGE,
  FRAGMENT_SLUG_LOCALES,
  FRAGMENT_TAG,
} from '@lib/datocms/datocms-common';
import { DatoCMSResponseType, HomePageType, ProjectsPageType } from '../../@types';

export const getProjectDetailsPageAndSite = async (locale: string, preview: boolean): Promise<DatoCMSResponseType<ProjectsPageType>> => {
  const query = `
    query ProjectsPageAndSite($locale: SiteLocale) {
      page: projectsPage(locale: $locale) {
        title
                
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
  `;

  return fetchAPI<DatoCMSResponseType<ProjectsPageType>>(
    query,
    {
      locale: locale,
    },
    preview,
  );
};
