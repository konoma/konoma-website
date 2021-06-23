import { DEFAULT_LOCALE } from '@lib/defaults';

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
