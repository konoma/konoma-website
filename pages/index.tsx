import Head from "next/head";
import NavMobile from "@components/NavMobile";
import NavDesktop from "@components/NavDesktop";
import SiteFooter from "@components/SiteFooter";
import SiteHero from "@components/SiteHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konoma</title>
      </Head>
      <SiteHero />
      {/*<NavMobile className="lg:hidden" />*/}
      {/*<NavDesktop className="lg:flex" />*/}
      {/*<SiteFooter />*/}
    </>
  );
}
