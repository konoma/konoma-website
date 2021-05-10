import Head from "next/head";
import NavMobile from "@components/Navigation/NavMobile";
import NavDesktop from "@components/Navigation/NavDesktop";
import SiteFooter from "@components/Layout/SiteFooter";
import SiteHero from "@components/Layout/SiteHero";
import ContentHero from "@components/Content/ContentHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konoma</title>
      </Head>
      <NavMobile />
      <NavDesktop />
      {/*<SiteHero />*/}
      <ContentHero />
      <SiteFooter />
    </>
  );
}
