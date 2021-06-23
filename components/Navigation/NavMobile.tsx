import LogoInverted from '@components/LogoInverted';
import NavLangToggle from '@components/Navigation/NavLangToggle';
import NavLink from '@components/Navigation/NavLink';
import { BaseComponentProps } from 'helper/classNames';
import React, { useState } from 'react';
import { LocaleAndValue } from '../../@types';
import NavMobileButton from './NavMobileButton';

interface NavMobileProps extends BaseComponentProps {
  currentPagePerLocale: LocaleAndValue[];
}

const NavMobile: React.FC<NavMobileProps> = (props) => {
  const { currentPagePerLocale, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50
                overflow-hidden flex flex-col lg:hidden
                bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl
                ${isOpen ? 'h-full' : 'h-auto'}
                ${className ?? ''}`}
    >
      <div className={`flex flex-nowrap justify-between`}>
        <LogoInverted />

        <NavMobileButton toggled={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div className={`flex-auto flex-col flex-nowrap justify-around items-center px-5 py-10 ${isOpen ? 'flex' : 'hidden'}`}>
        <NavLink to={'/'} title={'TBD'} className={`px-5 py-4`}>
          Übersicht
        </NavLink>
        <NavLink to={'/projekte'} title={'TBD'} className={`px-5 py-4`}>
          Projekte
        </NavLink>
        <NavLink to={'/team'} title={'TBD'} className={`px-5 py-4`}>
          Team
        </NavLink>
        <NavLink to={'/kontakt'} title={'TBD'} className={`px-5 py-4`}>
          Kontakt
        </NavLink>

        <NavLangToggle currentPagePerLocale={currentPagePerLocale} />
      </div>
    </nav>
  );
};

export default NavMobile;
