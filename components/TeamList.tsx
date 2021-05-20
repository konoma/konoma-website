import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Heading from "@components/Text/Heading";
import Copy from "@components/Text/Copy";
import PersonCard from "@components/PersonCard";

interface TeamListProps extends BaseComponentProps {
  title: string;
  lead: string;
  person?: object;
}

const TeamList: React.FC<TeamListProps> = (props) => {
  const { className, title, lead, person } = props;

  return (
    <section className={`${className ?? ""}`}>
      <div
        className={`container mx-auto px-2 lg:px-3 \
                  md:grid md:grid-cols-4 md:gap-3`}
      >
        <div className={`space-y-4 lg:space-y-8 md:col-span-4 xl:col-span-3`}>
          <Heading level="1" color="indigo" fontSerif>
            {title}
          </Heading>
          <Copy color="grey" level="lead">
            {lead}
          </Copy>
        </div>
      </div>
      <div
        className={`container mx-auto px-2 lg:px-3 pt-6 lg:pt-10 2xl:pt-15 \
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-y-4`}
      >
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
        <PersonCard
          name="Thierry Rietsch"
          role="Strategic Designer & Management & Co-Founder"
          img={{
            imgUrl: "/images/portrait-thierry-rietsch.jpg",
            imgAlt: "Thierry Rietsch Portrait",
          }}
        />
      </div>
    </section>
  );
};

export default TeamList;
