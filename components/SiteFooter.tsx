import React from "react";
import { BaseComponentProps } from "helper/classNames";
import Logo from "@components/Logo";

interface SiteFooterProps extends BaseComponentProps {}

const SiteFooter: React.FC<SiteFooterProps> = (props) => {
  const { className } = props;

  return (
    <footer className="flex flex-col mt-8 p-5 md:p-8 bg-white border-t border-indigo-200">
      <Logo />
      <div className="font-sans text-sm text-center">
        Konoma GmbH, <br className="md:hidden" />
        Rütistrasse 6, <br className="md:hidden" />
        5400 Baden, Schweiz
      </div>
    </footer>
  );
};

export default SiteFooter;
