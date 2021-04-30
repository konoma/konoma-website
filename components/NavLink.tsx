import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface Props {
  url: string;
  title?: string;
  children?: string;
}

const NavLink: React.FC<Props> = (props) => {
  const { url, title, children } = props;

  const router = useRouter();
  const isActive = router.pathname.startsWith(url);

  return (
    <Link href={url} passHref >
      <a
        className={`flex flex-col justify-center items-center h-10 px-5 font-sans font-medium text-sm md:text-sm-desktop group hover:text-indigo-500 transition transition-colors \
                    ${isActive ? 'text-indigo-700' : 'text-gray-900'}`}
        title={title}
      >
        {children}
        <span className={`w-3 h-[2px] mt-0.5 bg-current group-hover:opacity-100 transition transition-opacity \
                          ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      </a>
    </Link>
  );
};

export default NavLink;
