import LogoInverted from '@components/LogoInverted';
import LinkButton from '@components/Navigation/LinkButton';
import NavLangToggle from '@components/Navigation/NavLangToggle';
import NavLink from '@components/Navigation/NavLink';
import React from 'react';
import { LocaleAndValue } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface NavDesktopProps extends BaseComponentProps {
  currentPagePerLocale: LocaleAndValue[];
}

const NavDesktop: React.FC<NavDesktopProps> = (props) => {
  const { currentPagePerLocale, className } = props;
  return (
    <nav
      className={`fixed w-full z-50 \
                hidden lg:block \
                ${className ?? ''}`}
    >
      <div className={`container mx-auto px-3 flex flex-nowrap justify-between overflow-hidden`}>
        <LogoInverted />
        <div
          className={`flex flex-nowrap items-center px-1 \
                    bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl`}
        >
          <NavLink to={'/'} title={'TBD'} className={`p-2`}>
            Übersicht
          </NavLink>
          <NavLink to={'/projekte'} title={'TBD'} className={`p-2`}>
            Projekte
          </NavLink>
          <NavLink to={'/team'} title={'TBD'} className={`p-2`}>
            Team
          </NavLink>
          <LinkButton to={'/kontakt'} title={'TBD'} className={`mx-2`}>
            Kontakt
          </LinkButton>

          <NavLangToggle currentPagePerLocale={currentPagePerLocale} className={`ml-2 mr-[20px]`} />
        </div>
      </div>
    </nav>
  );
};

export default NavDesktop;
