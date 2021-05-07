import React from "react";
import Link from "next/link";
import { BaseComponentProps } from "../../helper/classNames";

interface LinkIconProps extends BaseComponentProps {
  text: string;
  to: string;
  type: "internal" | "external";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const IconLink: React.FC<LinkIconProps> = (props) => {
  const { className, text, to, type, iconLeft, iconRight } = props;

  // I guess we will need a special link for internal links. We'll add this later.
  return (
    <Link href={to} passHref>
      <a
        href={to}
        target={type === "external" ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`inline-flex flex-col justify-items-center items-center\
                    font-sans font-medium text-sm md:text-sm-desktop \
                    group text-blue-700 focus:outline-none focus:text-indigo-500 active:text-indigo-900 transition-colors \
                    ${className ?? ""}`}
      >
        <span className={`flex flex-nowrap`}>
          {iconLeft}
          {text}
          {iconRight}
        </span>
        <span
          className={`w-full h-[2px] mt-0.5 bg-current \
                    opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity`}
        />
      </a>
    </Link>
  );
};
export default IconLink;
