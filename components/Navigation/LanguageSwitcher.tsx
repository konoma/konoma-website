import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { LocaleAndValueType } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface LanguageSwitcherProps extends BaseComponentProps {
  currentPagePerLocale: LocaleAndValueType[];
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = (props) => {
  const { currentPagePerLocale, className } = props;
  const router = useRouter();

  const languageLinks = currentPagePerLocale
    .map<React.ReactNode>((pagePerLocale) => {
      const isActiveLocale = pagePerLocale.locale === router.locale;
      return (
        <Link key={pagePerLocale.value} href={pagePerLocale.value} passHref>
          <a
            className={`
                    px-0.5
                    font-semibold 
                    ${
                      isActiveLocale
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

  return <div className={`${className ?? ''}`}>{languageLinks}</div>;
};

export default LanguageSwitcher;
