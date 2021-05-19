import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Heading from "@components/Text/Heading";
import Copy from "@components/Text/Copy";
import LinkIcon from "@components/Navigation/LinkIcon";
import { IconArrow } from "@components/icons";

interface ContactTeaserProps extends BaseComponentProps {
  title: string;
  lead: string;
  link: {
    text: string;
    to: string;
  };
}

const ContactTeaser: React.FC<ContactTeaserProps> = (props) => {
  const { className, title, lead, link } = props;

  return (
    <section
      className={`bg-indigo-900 text-white mt-6 lg:mt-10 2xl:mt-15 py-8 lg:py-15 2xl:py-25
                ${className ?? ""}`}
    >
      <div
        className={`container mx-auto px-2 lg:px-3 \
                  lg:grid lg:grid-cols-4 lg:gap-3`}
      >
        <div className={`lg:col-span-3`}>
          <Heading level="2" type="h2" color="white" fontSerif>
            {title}
          </Heading>
          <Copy level="lead" color="white" className={`mt-4 lg:mt-8`}>
            {lead}
          </Copy>
          <LinkIcon
            text={link.text}
            to={link.to}
            color="white"
            type="internal"
            className={`mt-3 lg:mt-6`}
            iconRight={<IconArrow className={`flex-initial w-3 h-3 ml-1`} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
