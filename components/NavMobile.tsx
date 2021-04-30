import React, { useState } from "react";
import { BaseComponentProps } from "helper/classNames";
import LogoInverted from "@components/LogoInverted";
import NavLink from "@components/NavLink";
import NavMobileButton from "./NavMobileButton";

// extend BaseComponentProps to get default props automatically (like className)
interface Props extends BaseComponentProps {
  buttonClassNames?: string;
}

const NavMobile: React.FC<Props> = (props) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 \
                      ${isOpen ? "h-full" : "h-auto"} \
                      overflow-hidden flex flex-col \
                      bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl \
                      ${className ?? ""}`}
    >
      <div className="flex flex-nowrap justify-between">
        <LogoInverted />
        <NavMobileButton toggled={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div
        className={`flex-auto flex-col flex-nowrap justify-around items-center px-5 py-10 \
                        ${isOpen ? "flex" : "hidden"}`}
      >
        <NavLink url={"/"}>Übersicht</NavLink>
        <NavLink url={"/projekte"}>Projekte</NavLink>
        <NavLink url={"/team"}>Team</NavLink>
        <NavLink url={"/kontakt"}>Kontakt</NavLink>
      </div>
    </nav>
  );
};

export default NavMobile;
