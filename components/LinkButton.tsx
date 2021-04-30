import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Link from "next/link";

interface LinkButtonProps extends BaseComponentProps {
  url: string;
  title?: string;
  children?: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { className, url, title, children } = props;
  return (
    <Link href={url} passHref>
      <a
        className={`inline-block py-2 px-3 rounded-full \
                    font-sans text-white text-base md:text-base-desktop \
                    bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-900 transition transition-colors
                    ${className ?? ""}`}
        title={title}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
