import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import LogoInverted from "@components/LogoInverted";
import NavLink from "@components/NavLink";
import LinkButton from "@components/LinkButton";
import NavLangToggle from "@components/NavLangToggle";

interface NavDesktopProps extends BaseComponentProps {}

const NavDesktop: React.FC<NavDesktopProps> = (props) => {
  const { className } = props;
  return (
    <nav
      className={`fixed w-full z-50 \
                hidden flex-nowrap justify-between overflow-hidden \
                ${className ?? ""}`}
    >
      <LogoInverted />
      <div
        className={`flex flex-nowrap items-baseline p-1 \
                  bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl`}
      >
        <NavLink url={"/"} title={"TBD"} className={`p-2`}>
          Übersicht
        </NavLink>
        <NavLink url={"/projekte"} title={"TBD"} className={`p-2`}>
          Projekte
        </NavLink>
        <NavLink url={"/team"} title={"TBD"} className={`p-2`}>
          Team
        </NavLink>
        <LinkButton url={"/kontakt"} title={"TBD"} className={`mx-2`}>
          Kontakt
        </LinkButton>
        <NavLangToggle className={`ml-2 mr-[20px]`} />
      </div>
    </nav>
  );
};

export default NavDesktop;
