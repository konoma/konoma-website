import React from "react";
import { BaseComponentProps } from "../../helper/classNames";
import Link from "next/link";
import Heading from "@components/Text/Heading";
import Copy from "@components/Text/Copy";
import ContentImg from "@components/ContentImg";

interface ContentHeroProps extends BaseComponentProps {}

const ContentHero: React.FC<ContentHeroProps> = (props) => {
  const { className } = props;

  return (
    <header
      className={`container mx-auto px-2 lg:px-3 pt-15 lg:pt-25 space-y-4 lg:space-y-8`}
    >
      <div
        className={`lg:grid lg:grid-cols-8 lg:grid-rows-auto lg:auto-rows-min lg:auto-cols-min`}
      >
        <Heading
          level={"2"}
          type={"h1"}
          fontSerif
          colorBlue
          className={`mb-2 lg:mb-3 \ 
                    lg:col-start-1 lg:col-end-7`}
        >
          Aeropers – App
        </Heading>
        <Heading
          level={"hero"}
          type={"h2"}
          className={`mb-2 lg:mb-0 \
                    lg:col-start-1 lg:col-end-7`}
        >
          Digitale unterstützung für Schweizer Berufspiloten.
        </Heading>
        {/* Logo */}
        <div
          className={`max-w-[120px] lg:max-w-[200px] \
                    lg:max-w-none lg:col-start-8 lg:col-end-9 lg:self-end `}
        >
          <ContentImg
            imgUrl="/images/logo-aeropers.png"
            ratio="2/1"
            fill="contain"
            imgAlt="Aeropers Logo"
          />
        </div>
      </div>
      <ContentImg
        imgUrl="/images/example-hero-01.png"
        ratio="2/1"
        fill="cover"
      />
      <div
        className={` space-y-2 lg:space-y-4 \
                  lg:grid lg:grid-cols-4 lg:grid-rows-auto lg:auto-rows-min`}
      >
        <Copy level={"lead"} type="p" className={`lg:col-start-1 lg:col-end-4`}>
          Um die Flugsicherheit zu gewährleisten, müssen Pilotinnen und Piloten
          einen strikten Ruheplan einhalten. Die erlaubten Flugzeiten zu
          berechnen, ist komplex. Regelwerke vom Verband Aeropers und
          internationalen Organisationen wie der European Air and Safety
          Authority (EASA) müssen berücksichtigt werden.
        </Copy>
        <Copy level={"lead"} type="p" className={`lg:col-start-1 lg:col-end-4`}>
          Um Pilotinnen und Piloten die Berechnung zu erleichtern, hat Konoma im
          Auftrag des Verbands{" "}
          <Link href="#">
            <a>Aeropers</a>
          </Link>{" "}
          die App Flight Time Limitation (FTL) entwickelt. Sie zeigt in
          Sekundenschnelle die erlaubten Flug- und Ruhezeiten an.
        </Copy>
      </div>
    </header>
  );
};

export default ContentHero;
