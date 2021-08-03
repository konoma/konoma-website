const API_URL = 'https://graphql.datocms.com';

export const FRAGMENT_RESPONSIVE_IMAGE = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

export const FRAGMENT_COMPANY_INFORMATION = `  
    fragment companyInformationFragment on CompanyInformationRecord {
        address
        companyEmail
    }
  `;

export const FRAGMENT_FOOTER_INFORMATION = `  
    fragment footerInformationFragment on FooterInformationRecord {
        contactLabel
        contactPage {
          slug
        }
    }
  `;

export const FRAGMENT_SLUG_LOCALES = `
  fragment slugLocalesFragment on StringMultiLocaleField {
    locale
    value
  }
`;

export const FRAGMENT_TAG = `
  fragment tagFragment on Tag {
    attributes
    content
    tag
  }
`;

export const FRAGMENT_PROJECT_SHORT = `
  fragment projectShortFragment on ProjectRecord {
    slug
    title
    question
    customer {
      name
    }
    referenceLabel
    referenceImage {
      responsiveImage {
        ...responsiveImageFragment
      }
    }
  }
`;

export const FRAGMENT_CTA = `
  fragment ctaFragment on CtaRecord {
    title
    description
    targetLabel
    target {
      ... on ContactPageRecord {
        slug
      }
      ... on HomePageRecord {
        slug
      }
      ... on TeamPageRecord {
        slug
      }
      ... on ProjectsPageRecord {
        slug
      }
      ... on ProjectRecord {
        slug
      }
    }
  }
`;

export const fetchAPI = async <T>(query: string, variables: any, preview: boolean = false): Promise<T> => {
  const authorization = 'Bearer ' + process.env.DATO_CMS_API_TOKEN;

  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};
