import React from "react";
import LogoInverted from "@components/LogoInverted";
import NavLink from "@components/NavLink";
// @ts-ignore
import IconMenu from "./icons/menu.svg";
import { BaseComponentProps } from "helper/classNames";

// extend BaseComponentProps to get default props automatically (like className)
interface Props extends BaseComponentProps { buttonClassNames?: string }

const NavMobile: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <nav className={`fixed w-full h-screen z-50 \
                      overflow-hidden flex flex-col \
                      bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl \
                      ${className ?? ""}`}>

      <div className="flex flex-nowrap justify-between">
        <LogoInverted />
        <button className="flex-initial inline-flex items-center px-3 font-medium">
          Menu <IconMenu className="flex-initial w-3 h-3 ml-1.5" />
        </button>
      </div>
      <div className="flex-auto flex flex-col flex-nowrap justify-around items-center px-5 py-10">
        <NavLink url={"/"}>Übersicht</NavLink>
        <NavLink url={"/"}>Projekte</NavLink>
        <NavLink url={"/"}>Team</NavLink>
        <NavLink url={"/"}>Kontakt</NavLink>
      </div>

    </nav>
  );
};

export default NavMobile;
