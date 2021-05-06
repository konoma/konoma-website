import React from "react";
import { BaseComponentProps } from "../helper/classNames";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface LinkButtonProps extends BaseComponentProps {
  url: string;
  title?: string;
  children?: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { className, url, title, children } = props;

  const router = useRouter();
  const isActive = router.pathname.startsWith(url);

  return (
    <Link href={url} passHref>
      <a
        className={`inline-block py-[10px] px-2 rounded-full \
                    font-sans text-white text-base \
                    bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-900 transition-colors
                    ${isActive ? "bg-indigo-900" : "bg-indigo-500"}
                    ${className ?? ""}`}
        title={title}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
