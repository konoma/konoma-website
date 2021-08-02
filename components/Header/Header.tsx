import KonomaLogo from '@components/Logo/KonomaLogo';
import LanguageSwitcher from '@components/Navigation/LanguageSwitcher';
import NavigationButton from '@components/Navigation/NavigationButton';
import NavigationLink from '@components/Navigation/NavigationLink';
import NavMobileButton from '@components/Navigation/NavMobileButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleAndValueType } from '../../@types';

interface HeaderProps {
  currentPagePerLocale: LocaleAndValueType[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const { currentPagePerLocale } = props;
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <header className="max-w-7xl mx-auto flex flex-row justify-between">
        <Link href="/">
          <a>
            <KonomaLogo />
          </a>
        </Link>

        <NavMobileButton className="mr-8 md:hidden" toggled={showMenu} onClick={() => setShowMenu(!showMenu)} />

        <nav
          className={`
            absolute md:relative
            top-21 md:top-0 left-0 right-0 bottom-0 z-20
            w-full md:w-auto
            flex-col items-center space-y-8
            md:flex md:flex-row md:space-x-8 md:space-y-0
            md:px-8
            bg-white md:bg-transparent
            ${showMenu ? 'flex' : 'hidden'}
            `}
        >
          <NavigationLink key="overview" title={t('Overview')} url="/" />
          <NavigationLink key="projects" title={t('Projects')} url="/projects" />
          <NavigationLink key="team" title={t('Team')} url="/team" />

          <NavigationButton key="contact" title={t('Contact')} url="/contact" />

          <LanguageSwitcher currentPagePerLocale={currentPagePerLocale} />
        </nav>
      </header>
    </>
  );
};

export default Header;
