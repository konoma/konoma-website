import React from "react";
import Link from "next/link";

interface Props {
  url: string;
  title?: string;
  children?: string;
}

const LinkButton: React.FC<Props> = (props) => {
  const { url, title, children } = props;
  return (
    <Link href={url} passHref>
      <a
        className="inline-block py-2 px-3 rounded-full font-sans text-white text-base md:text-base-desktop bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-900 transition transition-colors"
        title={title}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
