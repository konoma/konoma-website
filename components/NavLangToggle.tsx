import { BaseComponentProps } from "../helper/classNames";
import React from "react";
import Link from "next/link";

interface NavLangToggleProps extends BaseComponentProps {}

const NavLangToggle: React.FC<NavLangToggleProps> = (props) => {
  const { className } = props;

  // Router Definition based on i18n > https://nextjs.org/docs/advanced-features/i18n-routing

  return (
    <div
      className={`flex flex-nowrap px-3 text-sm
                ${className ?? ""}`}
    >
      <Link href={"/"} passHref>
        <a
          className={`py-2 px-0.5 font-semibold text-grey-900 \
                    hover:text-indigo-500 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition transition-colors`}
        >
          DE
        </a>
      </Link>
      <span className={`py-2 px-0.5 font-medium text-grey-700`}>/</span>
      <Link href={"/en"} passHref>
        <a
          className={`py-2 px-0.5 font-medium text-grey-700 \
                    hover:text-indigo-500 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition transition-colors`}
        >
          EN
        </a>
      </Link>
    </div>
  );
};

export default NavLangToggle;
