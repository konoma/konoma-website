import {
  fetchAPI,
  fetchAPINoParams,
  FRAGMENT_COMPANY_INFORMATION,
  FRAGMENT_CTA,
  FRAGMENT_FOOTER_INFORMATION,
  FRAGMENT_RESPONSIVE_IMAGE,
  FRAGMENT_SLUG_LOCALES,
  FRAGMENT_TAG,
} from '@lib/datocms/datocms-common';
import { AllProjectSlugsType, DatoCMSResponseType, HomePageType, ProjectDetailsType, ProjectsPageType, SlugRouteType } from '../../@types';

export const getAllProjectSlugs = async (locale: string): Promise<AllProjectSlugsType> => {
  const query = `
    query AllProjectSlugs($locale: SiteLocale) {
      allProjects(locale: $locale) {
        slug
      }
    }
  `;

  return fetchAPINoParams<AllProjectSlugsType>(query);
};

export const getProjectPageAndSite = async (
  slug: string,
  locale: string,
  preview: boolean,
): Promise<DatoCMSResponseType<ProjectDetailsType>> => {
  const query = `
    query ProjectsPageAndSite($slug: String, $locale: SiteLocale) {
      page: project(filter: {slug: {eq: $slug}}, locale: $locale) {
        title
        question
        
        customer {
          name
          logo {
            responsiveImage {
              ...responsiveImageFragment
            }
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

  return fetchAPI<DatoCMSResponseType<ProjectDetailsType>>(
    query,
    {
      locale: locale,
      slug: slug,
    },
    preview,
  );
};
