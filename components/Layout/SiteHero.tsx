import React from "react";
import { BaseComponentProps } from "../../helper/classNames";
import Heading from "@components/Text/Heading";
import ListServices from "@components/ListServices";
import Copy from "@components/Text/Copy";

interface SiteHeroProps extends BaseComponentProps {}

const SiteHero: React.FC<SiteHeroProps> = (props) => {
  const { className } = props;

  return (
    <header
      className={`container mx-auto px-2 lg:px-3 pt-15 lg:pt-25 \
                lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:auto-rows-min lg:gap-x-3 lg:content-start \
                ${className ?? ""}`}
    >
      <Heading
        level="hero"
        type="h1"
        className={`lg:col-start-1 lg:col-end-4 lg:row-start-1 lg-row-end-2`}
      >
        Wir gestalten gemeinsam Ihren Erfolg in der Welt von morgen.
      </Heading>
      <Copy
        level={"base"}
        className={`lg:col-start-1 lg:col-end-3 lg:row-start-2 lg-row-end-3`}
      >
        Um dies zu erreichen, gestalten wir zusammen Ihre Zukunft und gehen mit
        Ihnen den Weg dorthin. Dabei erarbeiten wir strategische Konzepte,
        kundenzentrierte Interaktionen und digitale Lösungen.
      </Copy>
      <div
        className={`lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-5`}
      >
        <div className={`aspect-w-1 aspect-h-1 bg-indigo-100`} />
      </div>
      <div
        className={`lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-5`}
      >
        <Heading
          level="2"
          type="h3"
          className={`text-indigo-700 lg:text-3xl-desktop`}
        >
          Unsere Leidenschaft
        </Heading>
        <ListServices />
      </div>
    </header>
  );
};

export default SiteHero;
