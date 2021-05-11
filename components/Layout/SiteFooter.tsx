import React from "react";
import { BaseComponentProps } from "helper/classNames";
import Logo from "@components/Logo";
import LinkIcon from "@components/Navigation/LinkIcon";
import { IconMail, IconArrow } from "@components/icons";

interface SiteFooterProps extends BaseComponentProps {}

const SiteFooter: React.FC<SiteFooterProps> = (props) => {
  const { className } = props;

  return (
    <footer
      className={`flex flex-col gap-4 \
                mt-6 lg:mt-10 2xl:mt-15 p-5 md:p-8 \
                bg-white border-t border-indigo-200 \
                ${className ?? ""}`}
    >
      <Logo />
      <div className={`font-sans font-medium text-sm text-center`}>
        Konoma GmbH, <br className="md:hidden" />
        Rütistrasse 6, <br className="md:hidden" />
        5400 Baden, Schweiz
      </div>
      <div
        className={`flex flex-nowrap flex-col md:flex-row justify-center items-center`}
      >
        <LinkIcon
          text={"info@konoma.ch"}
          to={"mailto:info@konoma.ch"}
          type={"internal"}
          className={`flex-initial p-0.5 md:p-2`}
          iconLeft={<IconMail className={`flex-initial w-3 h-3 mr-1`} />}
        />
        <LinkIcon
          text={"Kontakt"}
          to={"/kontakt"}
          type={"internal"}
          className={`flex-initial p-0.5 md:p-2`}
          iconLeft={<IconArrow className={`flex-initial w-3 h-3 mr-1`} />}
        />
      </div>
    </footer>
  );
};

export default SiteFooter;
