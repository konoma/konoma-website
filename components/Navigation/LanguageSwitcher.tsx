import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { LocaleAndValue } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface LanguageSwitcherProps extends BaseComponentProps {
  currentPagePerLocale: LocaleAndValue[];
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  const { currentPagePerLocale, className } = props;
  const router = useRouter();

  const languageLinks = currentPagePerLocale
    .map<React.ReactNode>((pagePerLocale) => {
      return (
        <Link href={pagePerLocale.value}>
          <a
            className={`
                    px-0.5
                    font-semibold 
                    ${
                      pagePerLocale.locale === router.locale
                        ? 'text-grey-700 hover:text-grey-700 focus:text-grey-700 active:text-grey-700'
                        : 'text-grey-900 hover:text-indigo-500 focus:text-indigo-500 active:text-indigo-900'
                    }
                    focus:outline-none
                    transition-colors`}
          >
            {pagePerLocale.locale.toLocaleUpperCase()}
          </a>
        </Link>
      );
    })
    .reduce((prev, curr) => [prev, <span className="mx-0.5">/</span>, curr]);

  return <div className={`flex flex-nowrap text-sm ${className ?? ''}`}>{languageLinks}</div>;
};

export default LanguageSwitcher;
