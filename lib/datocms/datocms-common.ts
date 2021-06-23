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

export const fetchAPI = async <T>(query: string, variables: any, preview: boolean): Promise<T> => {
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
