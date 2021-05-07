import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import ListServices from "@components/ListServices";

interface SiteHeroProps extends BaseComponentProps {}

const SiteHero: React.FC<SiteHeroProps> = (props) => {
  const { className } = props;

  return (
    <header>
      <h1 className="font-sans font-semibold text-gray-900 text-5xl lg:text-5xl-desktop mb-4 md:mb-8">
        Wir gestalten gemeinsam Ihren Erfolg in der Welt von morgen.
      </h1>
      <h2 className="font-sans font-medium text-gray-900 text-lg md:text-lg-desktop mb-4 md:mb-8">
        Um dies zu erreichen, gestalten wir zusammen Ihre Zukunft und gehen mit
        Ihnen den Weg dorthin. Dabei erarbeiten wir strategische Konzepte,
        kundenzentrierte Interaktionen und digitale Lösungen.
      </h2>
      <div className="aspect-w-1 aspect-h-1 bg-indigo-100 mb-4 md:mb-8" />
      <div>
        <h3 className="font-serif font-bold text-indigo-500 text-3xl md:text-3xl-desktop">
          Unsere Leidenschaft
        </h3>
        <ListServices />
      </div>
    </header>
  );
};

export default SiteHero;
