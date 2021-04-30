import React from "react";
import Link from "next/link";

interface Props {
  url: string;
  title?: string;
  children?: string;
}

const NavLink: React.FC<Props> = (props) => {
  const { url, title, children } = props;
  return (
    <Link href={url} passHref>
      {/* Todo if active, then text-indigo-700*/}
      <a
        className="flex flex-col justify-center items-center h-10 px-5 font-sans font-medium text-sm md:text-sm-desktop text-gray-900 group hover:text-indigo-500 active:text-indigo-900 transition transition-colors"
        title={title}
      >
        {children}
        <span className="w-3 h-[2px] mt-0.5 bg-current opacity-0 group-hover:opacity-100 transition transition-opacity" />
      </a>
    </Link>
  );
};

export default NavLink;
