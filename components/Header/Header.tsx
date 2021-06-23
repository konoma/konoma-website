import KonomaLogo from '@components/KonomaLogo';
import LanguageSwitcher from '@components/Navigation/LanguageSwitcher';
import NavLink from '@components/Navigation/NavLink';
import NavMobileButton from '@components/Navigation/NavMobileButton';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleAndValue } from '../../@types';

interface HeaderProps {
  currentPagePerLocale: LocaleAndValue[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const { currentPagePerLocale } = props;
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <header className="max-w-7xl mx-auto flex flex-row justify-between">
        <KonomaLogo />

        <NavMobileButton className="mr-8 md:hidden" toggled={showMenu} onClick={() => setShowMenu(!showMenu)} />

        <nav
          className={`
            absolute md:relative
            top-21 md:top-0 left-0 right-0 bottom-0 z-20
            w-full md:w-auto
            flex-col justify-center align-middle space-y-8
            md:flex md:flex-row md:space-x-8 md:space-y-0
            md:px-8
            bg-white md:bg-transparent
            ${showMenu ? 'flex' : 'hidden'}
            `}
        >
          <NavLink key="overview" to={'/'} title={t('Overview')} />
          <NavLink key="projects" to={'/'} title={t('Projects')} />
          <NavLink key="team" to={'/'} title={t('Team')} />
          <NavLink key="contact" to={'/'} title={t('Contact')} />

          <div className="flex flex-col justify-center align-middle mx-auto">
            <LanguageSwitcher currentPagePerLocale={currentPagePerLocale} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
