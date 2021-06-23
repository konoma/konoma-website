import NavDesktop from '@components/Navigation/NavDesktop';
import NavMobile from '@components/Navigation/NavMobile';
import React from 'react';
import { LocaleAndValue } from '../../@types';

interface NavigationProps {
  currentPagePerLocale: LocaleAndValue[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { currentPagePerLocale } = props;

  return (
    <>
      <NavMobile currentPagePerLocale={currentPagePerLocale} />
      <NavDesktop currentPagePerLocale={currentPagePerLocale} />
    </>
  );
};

export default Navigation;
