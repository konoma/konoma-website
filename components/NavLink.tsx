import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface NavLinkProps extends BaseComponentProps {
  url: string;
  title?: string;
  children?: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { className, url, title, children } = props;

  const router = useRouter();
  const isActive = router.pathname.startsWith(url);

  return (
    <Link href={url} passHref>
      <a
        className={`flex flex-col justify-center items-center px-5 py-4 \
                    font-sans font-medium text-sm md:text-sm-desktop \
                    group hover:text-indigo-500 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition transition-colors \
                    ${isActive ? "text-indigo-700" : "text-gray-900"}
                    ${className ?? ""}`}
        title={title}
      >
        {children}
        <span
          className={`w-3 h-[2px] mt-0.5 bg-current \
                    group-hover:opacity-100 group-active:opacity-0 transition transition-opacity \
                    ${isActive ? "opacity-100" : "opacity-0"}`}
        />
      </a>
    </Link>
  );
};

export default NavLink;
