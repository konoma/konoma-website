import { DEFAULT_LOCALE } from '@lib/defaults';
import { ParsedUrlQuery } from 'querystring';
import { SlugRouteType } from '../@types';

export const GetLocale = (localeFromContext?: string): string => {
  if (localeFromContext === undefined || localeFromContext === null) {
    return DEFAULT_LOCALE;
  } else {
    return localeFromContext;
  }
};

export const GetPreview = (previewFromContext?: boolean): boolean => {
  if (previewFromContext === undefined || previewFromContext === null) {
    return false;
  } else {
    return previewFromContext;
  }
};

export const GetSlug = (paramsFromContext?: SlugRouteType): string | null => {
  if (paramsFromContext === undefined || paramsFromContext === null) {
    return null;
  } else {
    return paramsFromContext.slug;
  }
};
