import SiteContent from '@components/Layout/SiteContent';
import SiteFooter from '@components/Layout/SiteFooter';
import NavDesktop from '@components/Navigation/NavDesktop';
import NavMobile from '@components/Navigation/NavMobile';
import BasePage from '@components/Pages/BasePage';
import Head from 'next/head';
import React from 'react';

interface HomePageProps {
  page: any;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { page } = props;

  return (
    <>
      <h1>{page.slogan}</h1>
    </>
  );
};

export default HomePage;
