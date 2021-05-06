import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import ListServices from "@components/ListServices";

interface SiteHeroProps extends BaseComponentProps {}

const SiteHero: React.FC<SiteHeroProps> = (props) => {
  const { className } = props;

  return (
    <header>
      <h1>Wir gestalten gemeinsam Ihren Erfolg in der Welt von morgen.</h1>
      <h2>
        Um dies zu erreichen, gestalten wir zusammen Ihre Zukunft und gehen mit
        Ihnen den Weg dorthin. Dabei erarbeiten wir strategische Konzepte,
        kundenzentrierte Interaktionen und digitale Lösungen.
      </h2>
      <div className="aspect-w-1 aspect-h-1 bg-indigo-100" />
      <div>
        <h3>Unsere Leidenschaft</h3>
        <ListServices />
      </div>
    </header>
  );
};

export default SiteHero;
