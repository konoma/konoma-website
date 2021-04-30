import React, { useState } from "react";
import { BaseComponentProps } from "helper/classNames";
import Link from "next/link";
import LogoInverted from "@components/LogoInverted";
import NavLink from "@components/NavLink";
import NavMobileButton from "./NavMobileButton";
import NavLangToggle from "@components/NavLangToggle";

// extend BaseComponentProps to get default props automatically (like className)
interface NavMobileProps extends BaseComponentProps {
  buttonClassNames?: string;
}

const NavMobile: React.FC<NavMobileProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 \
                overflow-hidden flex flex-col \
                bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl \
                ${isOpen ? "h-full" : "h-auto"}
                ${className ?? ""}`}
    >
      <div className={`flex flex-nowrap justify-between`}>
        <LogoInverted />
        <NavMobileButton toggled={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div
        className={`flex-auto flex-col flex-nowrap justify-around items-center px-5 py-10 \
                  ${isOpen ? "flex" : "hidden"}`}
      >
        <NavLink url={"/"}>Übersicht</NavLink>
        <NavLink url={"/projekte"} title={"Unsere Projekte"}>
          Projekte
        </NavLink>
        <NavLink url={"/team"} title={"Das Konoma Team"}>
          Team
        </NavLink>
        <NavLink url={"/kontakt"} title={"Kontaktiere uns"}>
          Kontakt
        </NavLink>
        <NavLangToggle />
      </div>
    </nav>
  );
};

export default NavMobile;
