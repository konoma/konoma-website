import Head from "next/head";
import NavMobile from "@components/Navigation/NavMobile";
import NavDesktop from "@components/Navigation/NavDesktop";
import SiteContent from "@components/Layout/SiteContent";
import SiteFooter from "@components/Layout/SiteFooter";
import SiteHero from "@components/Layout/SiteHero";
import ContentHero from "@components/Content/ContentHero";
import ContentImgText from "@components/Content/ContentImgText";
import ContentImg from "@components/ContentImg";
import Heading from "@components/Text/Heading";
import Copy from "@components/Text/Copy";
import LinkCard from "@components/Navigation/LinkCard";
import ProjectTeaser from "@components/ProjectTeaser";
import ContactTeaser from "@components/ContactTeaser";
import CustomerList from "@components/CustomerList";
import TeamList from "@components/TeamList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konoma</title>
      </Head>
      <NavMobile />
      <NavDesktop />
      <SiteContent>
        {/*<SiteHero />*/}
        {/*<ContentHero />*/}
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
        {/*  <Heading level="4" type="h4" color="indigo">*/}
        {/*    Keine manuellen Berechnungen mehr*/}
        {/*  </Heading>*/}
        {/*  <Copy level="base" color="grey">*/}
        {/*    Auch die Darstellung längerer Ruhephasen (Rest Periods und Local*/}
        {/*    Nights) ist minimalistisch einfach. Die Pilotinnen und Piloten*/}
        {/*    wissen immer, wie lange ihre Pausen noch dauern: Ein einfaches*/}
        {/*    Ampelsystem (Rot-Grün), ergänzt mit unmissverständlichen Icons,*/}
        {/*    zeigt sofort, ob ein Flug zum aktuellen Zeitpunkt erlaubt ist.*/}
        {/*  </Copy>*/}
        {/*</ContentImgText>*/}
        {/*<ProjectTeaser title="Weitere Arbeiten">*/}
        {/*  <LinkCard*/}
        {/*    label="Aeropers App - Community"*/}
        {/*    title="Wie kann die tägliche Arbeit der Pilot*innen …"*/}
        {/*    to="#"*/}
        {/*  />*/}
        {/*  <LinkCard*/}
        {/*    label="Aargau Tourismus"*/}
        {/*    title="Geschäftsmodell in Zeiten von Corona"*/}
        {/*    to="#"*/}
        {/*  />*/}
        {/*</ProjectTeaser>*/}
        {/*<ContactTeaser*/}
        {/*  title="Lassen Sie uns Ihre Zukunft angehen"*/}
        {/*  lead="Das Merkwürdige an der Zukunft ist wohl die Vorstellung, dass man unsere Zeit einmal die gute alte Zeit nennen wird."*/}
        {/*  link={{ text: "Kontaktieren Sie uns", to: "#" }}*/}
        {/*/>*/}
        {/*<CustomerList title="Weitere Kund:innen, mit denen wir zusammenarbeiten dürfen." />*/}
        <TeamList
          title="Unser Team"
          lead="Konoma ist davon überzeugt, dass man im Team mehr erreicht. Jeder von uns verfügt in seinem Bereich über eine enorme Wissenstiefe. Neue Impulse und Inspirationen entstehen durch Austausch, das Zusammenwachsen unterschiedlicher Fähigkeiten und indem Entscheidungen gemeinsam getroffen werden. Für jede Herausforderung stellen wir ein Team von Spezialisten zusammen. Diese Haltung und die Art der Kooperation machen Konoma aus – und Ideen stark. Diese Haltung und die Art der Kooperation machen Konoma aus – und Ideen stark."
        />
        <SiteFooter />
      </SiteContent>
    </>
  );
}
