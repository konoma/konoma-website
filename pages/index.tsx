import Head from "next/head";
import NavMobile from "@components/Navigation/NavMobile";
import NavDesktop from "@components/Navigation/NavDesktop";
import SiteFooter from "@components/Layout/SiteFooter";
import SiteHero from "@components/Layout/SiteHero";
import ContentHero from "@components/Content/ContentHero";
import ContentImgText from "@components/Content/ContentImgText";
import ContentImg from "@components/ContentImg";
import Heading from "@components/Text/Heading";
import Copy from "@components/Text/Copy";
import LinkCard from "@components/Navigation/LinkCard";
import ProjectTeaser from "@components/ProjectTeaser";

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
      {/*<ContentImgText*/}
      {/*  imgOrientation="right"*/}
      {/*  image={*/}
      {/*    <ContentImg*/}
      {/*      imgUrl="/images/example-01.png"*/}
      {/*      ratio="4/3"*/}
      {/*      fill="cover"*/}
      {/*    />*/}
      {/*  }*/}
      {/*>*/}
      {/*  <Heading level="4" type="h4" colorBlue>*/}
      {/*    Keine manuellen Berechnungen mehr*/}
      {/*  </Heading>*/}
      {/*  <Copy level="base">*/}
      {/*    Auch die Darstellung längerer Ruhephasen (Rest Periods und Local*/}
      {/*    Nights) ist minimalistisch einfach. Die Pilotinnen und Piloten wissen*/}
      {/*    immer, wie lange ihre Pausen noch dauern: Ein einfaches Ampelsystem*/}
      {/*    (Rot-Grün), ergänzt mit unmissverständlichen Icons, zeigt sofort, ob*/}
      {/*    ein Flug zum aktuellen Zeitpunkt erlaubt ist.*/}
      {/*  </Copy>*/}
      {/*</ContentImgText>*/}
      <ProjectTeaser title="Weitere Arbeiten">
        <LinkCard
          label="Aeropers App - Community"
          title="Wie kann die tägliche Arbeit der Pilot*innen …"
          to="#"
        />
        <LinkCard
          label="Aargau Tourismus"
          title="Geschäftsmodell in Zeiten von Corona"
          to="#"
        />
      </ProjectTeaser>
      <SiteFooter />
    </>
  );
}
