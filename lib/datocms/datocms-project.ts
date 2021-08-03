import {
  fetchAPI,
  FRAGMENT_COMPANY_INFORMATION,
  FRAGMENT_FOOTER_INFORMATION,
  FRAGMENT_RESPONSIVE_IMAGE,
  FRAGMENT_SLUG_LOCALES,
  FRAGMENT_TAG,
} from '@lib/datocms/datocms-common';
import { AllProjectSlugsType, DatoCMSResponseType, ProjectDetailsType } from '../../@types';

export const getAllProjectSlugs = async (locale: string): Promise<AllProjectSlugsType> => {
  const query = `
    query AllProjectSlugs($locale: SiteLocale) {
      allProjects(locale: $locale) {
        slug
      }
    }
  `;

  // TODO: Fix query and processing!
  /*

    allProjects {
    _allSlugLocales {
      locale
      value
    }
  }

   */

  return fetchAPI<AllProjectSlugsType>(query, {
    locale: locale,
  });
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
        
        heroImage {
          responsiveImage {
            ...responsiveImageFragment
          }
        }
        
        content {
          ... on SubtitleRecord {
            subtitle
            id
          }
          ... on TextRecord {
            id
            text
          }
          ... on TextAndImageBlockRecord {
            id
            title
            description
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
            imageAlignment
                        
            projectLink {
              slug
              referenceLabel
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
